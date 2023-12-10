import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUserInfo } from "../../hooks/useFetchRecipientUserInfo";
import moment from "moment";
import InputEmoji from "react-input-emoji";
import { useEffect } from "react";

const ChatBox = () => {
  const { user } = useContext(AuthContext);

  const { currentChat, messages, isMessagesLoading, sendTextMessage } = useContext(ChatContext);

  const { recipientUser } = useFetchRecipientUserInfo(currentChat, user);
  const { onlineUsers } = useContext(ChatContext);
  const isTheUserOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

  const [textMessage, setTextMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (!recipientUser)
    return (
      <div className="flex-col items-center justify-center hidden w-full font-bold text-center md:flex">
        <h2 className="mb-8 text-3xl dark:text-white">What are you waiting for?</h2>
        <p className="text-5xl text-purple-500 dark:text-yellow-500">Start chatting!</p>
      </div>
    );

  if (isMessagesLoading) return <p className="w-full text-center">Loading chat...</p>;

  return (
    // CONTAINER
    <div id="ChatBox" className="flex flex-col flex-1 w-1/12 ">
      {/* TOP - NAME -IMG - ISONLINE? */}
      <div
        id="ChatBox_User_Info"
        className="flex flex-row items-center justify-center p-3 text-white bg-gradient-to-r from-violet-950 to-violet-700 rounded-t-xl "
      >
        <div id="User_Profile_Pic">
          <img className="w-16 h-16 mr-4 rounded-full" src={recipientUser?.picture} alt={recipientUser?.name} />
        </div>

        <div id="User_Full_Name" className="mr-4">
          <strong className="text-xl tracking-widest text-red-400 dark:text-yellow-500">
            {recipientUser?.name.toUpperCase()} {recipientUser?.surname.toUpperCase()}
          </strong>
        </div>

        <div id="User_Online_Status">
          <span className={isTheUserOnline ? "relative flex h-4 w-4" : ""}>
            <span className={isTheUserOnline ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" : ""}></span>
            <span className={isTheUserOnline ? "relative inline-flex rounded-full h-4 w-4 bg-green-500" : ""}></span>
          </span>
        </div>
      </div>

      {/* MIDDLE - CHAT MESSAGES */}
      <div id="ChatBox_Container" className="p-4 overflow-y-scroll grow border-x-2 border-l-violet-800 border-r-purple-800">
        <div className="flex flex-col">
          {/* MESSAGES */}
          <div id="ChatBox_Messages_Container" className="flex flex-col space-y-4 ">
            {messages &&
              messages?.map((message, index) => (
                <div
                  id={`ChatBox_UserMessage_${index + 1}`}
                  className={`${
                    message?.senderId === user?._id
                      ? "bg-purple-500 dark:bg-purple-600 text-white p-3 rounded-lg  self-end text-end max-w-[70%] break-words"
                      : "bg-blue-500 dark:bg-blue-600 text-white p-3 rounded-lg  self-start text-start max-w-[70%] break-words"
                  }`}
                  key={index}
                  ref={scroll}
                >
                  <span className="text-lg tracking-wider text-wrap">{message.text}</span>
                  <br></br>
                  <span className="text-xs font-semibold tracking-widest text-yellow-400 dark:text-yellow-500">
                    {moment(message.createdAt).calendar()}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* BOTTOM - INPUT TEXT */}
      <div id="ChatBox_TextArea" className="p-4 mb-auto space-x-3 bg-gradient-to-r from-violet-800 to-violet-950 rounded-b-xl">
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
          onEnter={() => sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}
          shouldReturn="true"
          theme="auto"
          // maxLength="300"
          fontSize="1rem"
        />
      </div>
    </div>
  );
};

export default ChatBox;
