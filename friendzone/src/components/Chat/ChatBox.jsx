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

  const { currentChat, messages, isMessagesLoading, sendTextMessage } =
    useContext(ChatContext);

  const { recipientUser } = useFetchRecipientUserInfo(currentChat, user);

  const [textMessage, setTextMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!recipientUser)
    return (
      <div className="flex flex-col items-center justify-center w-full font-bold text-center">
        <h2 className="mb-8 text-2xl">What are you waiting for?</h2>
        <p className="text-4xl text-purple-500">Start chatting!</p>
      </div>
    );

  if (isMessagesLoading)
    return <p className="w-full text-center">Loading chat...</p>;

  return (
    // CONTAINER
    <div className="flex flex-col w-[1024px] h-screen container-xl">
      {/* NAME */}
      <div
        id="ChatBox_User_Info"
        className="justify-between p-3 text-center text-white bg-gray-900"
      >
        <strong>
          {recipientUser?.name} {recipientUser?.surname}
        </strong>
      </div>

      {/* CHAT */}
      <div id="ChatBox_Container" className="flex-grow p-4 overflow-y-scroll">
        <div className="flex flex-col flex-grow">
          {/* MESSAGES */}
          <div
            id="ChatBox_Messages_Container"
            className="flex flex-col space-y-4 "
          >
            {messages &&
              messages?.map((message, index) => (
                <div
                  id={`ChatBox_UserMessage_${index + 1}`}
                  className={`${
                    message?.senderId === user?._id
                      ? "bg-purple-500 text-white p-3 rounded-lg  self-end text-end max-w-[48%] break-words"
                      : "bg-blue-500 text-white p-3 rounded-lg  self-start text-start max-w-[48%] break-words"
                  }`}
                  key={index}
                  ref={scroll}
                >
                  <span className="text-sm text-wrap">{message.text}</span>
                  <br></br>
                  <span className="text-xs font-semibold text-gray-300">
                    {moment(message.createdAt).calendar()}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* INPUT TEXT */}
      <div
        id="ChatBox_TextArea"
        className="flex flex-row p-4 space-x-3 bg-gray-800 self-centerflex-wrap"
      >
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
          onEnter={() =>
            sendTextMessage(textMessage, user, currentChat._id, setTextMessage)
          }
          shouldReturn="true"
          theme="dark"
          maxLength="300"
          fontSize="1rem"
        />
      </div>
    </div>
  );
};

export default ChatBox;
