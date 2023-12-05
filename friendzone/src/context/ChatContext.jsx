import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/service";
import { io } from "socket.io-client";

// CREATE CONTEXT TO SHARE CHAT STATE ACROSS THE APPLICATION.
export const ChatContext = createContext();

// CHAT CONTEXT PROVIDER COMPONENT FOR MANAGING CHAT FUNCTIONALITY.
export const ChatContextProvider = ({ children, user }) => {
  // SETS ALL THE POTENTIAL USER CHATS aka MATCHED USERS
  const [potentialChats, setPotentialChats] = useState(null);

  // SETS ALL THE AVAILABLE "USER CHATS ROOMS" FOR THE CURRENT LOGGED-IN USER
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);

  // SETS THE CURRENT "CHAT ROOM ID" WHEN CLICKING ON THE SELECTED USER
  const [currentChat, setCurrentChat] = useState(null);

  // SET THE MESSAGES FOR THE CURRENT "CHAT ROOM ID"
  const [messages, setMessages] = useState(null);
  const [messagesError, setMessagesError] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);

  // IF THERE WAS AN ERROR DURING THE SEND OF THE MESSAGE, IT'LL BE STORED HERE
  const [sendTextMessageError, setSendTextMessageError] = useState(null);

  // SETS THE NEW MESSAGE SENT
  const [newMessage, setNewMessage] = useState(null);

  // SOCKET.IO CONNECTION STATE
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  // ALL REGISTERED USERS STATE
  const [allUsers, setAllUsers] = useState([]);

  // ################################################################################################
  // INITIALIZE SOCKET.IO CONNECTION
  useEffect(() => {
    const newSocket = io("http://localhost:3000");

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // SET ONLINE USERS USING SOCKET.IO
  useEffect(() => {
    if (socket === null) return;

    socket.emit("addNewUser", user?._id);
    socket.on("getOnlineUsers", (onlineUsersReceived) => {
      setOnlineUsers(onlineUsersReceived);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [socket]);

  // SEND MESSAGE TO A SPECIFIC USER USING SOCKET.IO
  useEffect(() => {
    if (socket === null) return;

    const recipientId = currentChat?.members.find((id) => id !== user?._id);

    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage]);

  // RECEIVE MESSAGE USING SOCKET.IO
  useEffect(() => {
    if (socket === null) return;

    socket.on("getMessage", (newMessageReceived) => {
      if (currentChat?._id !== newMessageReceived.chatId) return; // to avoid updating the wrong chat

      // add the messages received in the array of messages
      setMessages((prevMessage) => [...prevMessage, newMessageReceived]);
    });

    return () => {
      socket.off("getMessage");
    };
  }, [socket, currentChat]);
  // ################################################################################################

  // FETCH ALL REGISTERED USERS & POTENTIAL USER CHATS aka MATCHED USERS
  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/users`);

      if (response.error) {
        return console.log("Error fetching users:", response);
      }

      if (userChats) {
        const potentialChats = response?.filter((potentialUser) => {
          let isChatCreated = false;

          if (user._id === potentialUser._id) return false;

          isChatCreated = userChats?.some(
            (chat) =>
              chat.members[0] === potentialUser._id ||
              chat.members[1] === potentialUser._id
          );

          return !isChatCreated;
        });

        setPotentialChats(potentialChats);
      }

      setAllUsers(response);
    };

    getUsers();
  }, [userChats]);

  // CREATE A "CHAT ROOM ID" WITH THE MATCHED USERS (POTENTIAL USER CHATS)
  const createChat = useCallback(async (senderId, receiverId) => {
    const response = await postRequest(
      `${baseUrl}/chats`,
      JSON.stringify({ senderId, receiverId })
    );

    if (response.error) {
      return console.log("Error creating chat:", response);
    }

    setUserChats((prev) => [...prev, response]);
  }, []);

  // FETCH ALL THE AVAILABLE "USER CHATS ROOMS" FOR THE CURRENT LOGGED-IN USER
  useEffect(() => {
    const getUserChats = async () => {
      setIsUserChatsLoading(true);
      setUserChatsError(null);

      if (user?._id) {
        const userId = user?._id;

        const response = await getRequest(`${baseUrl}/chats/${userId}`);

        if (response.error) {
          return setUserChatsError(response);
        }

        setUserChats(response);
      }

      setIsUserChatsLoading(false);
    };

    getUserChats();
  }, [user]);

  // UPON CLICK ON THE SELECTED USER, IT WILL UPDATE THE CURRENT "CHAT ROOM ID"
  const updateCurrentChat = useCallback(async (chat) => {
    setCurrentChat(chat);
  }, []);

  // FETCH ALL THE MESSAGES OF THE CURRENT "CHAT ROOM ID"
  useEffect(() => {
    const getMessages = async () => {
      setIsMessagesLoading(true);

      const response = await getRequest(
        `${baseUrl}/messages/${currentChat?._id}`
      );

      setIsMessagesLoading(false);

      if (response.error) {
        return setMessagesError(error);
      }

      setMessages(response);
    };
    getMessages();
  }, [currentChat]);

  // SEND USER MESSAGES IN THE CURRENT "CHAT ROOM ID"
  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChatId, setTextMessage) => {
      if (!textMessage) return console.log("You can't sent blank messages. Please type something.");

      const response = await postRequest(
        `${baseUrl}/messages`,
        JSON.stringify({
          chatId: currentChatId,
          senderId: sender._id,
          text: textMessage,
        })
      );

      if (response.error) {
        return setSendTextMessageError(response);
      }

      setNewMessage(response);
      setMessages((prev) => [...prev, response]);
      setTextMessage("");
    },
    []
  );

  // ################################################################################################

  // PROVIDE CONTEXT VALUES TO CHILD COMPONENTS.
  return (
    <ChatContext.Provider
      value={{
        // FIND POTENTIAL CHAT (MATCHED USERS) & CREATE CHAT ROOM ID WITH THEM
        potentialChats,
        createChat,

        // FETCH ALL THE AVAILABLE "USER CHATS ROOMS" FOR THE CURRENT LOGGED-IN USER
        userChats,
        isUserChatsLoading,
        userChatsError,

        // FIND THE CURRENT CLICKED CHAT & UPDATE IT UPON CLICK ON THE SELECTED USER
        updateCurrentChat,
        currentChat,

        // GET MESSAGES OF THE CURRENT "CHAT ROOM ID"
        messages,
        messagesError,
        isMessagesLoading,

        // SEND USER MESSAGES IN THE CURRENT "CHAT ROOM ID"
        sendTextMessage,
        sendTextMessageError,

        // EVERY TIME A NEW MESSAGE ARRIVES, WE FETCH THE LATEST MESSAGE IN THE USER CARD COMPONENT
        newMessage,

        // SOCKET IO
        socket,
        onlineUsers,
        allUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
