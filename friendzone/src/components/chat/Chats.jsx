import React, { useEffect, useRef } from "react";
import Message from "./Message";

const Chat = ({ searchMessage, selectedUser }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [searchMessage]);

  return (
    <div className="flex flex-col flex-grow">
      {selectedUser && (
        <>
          <div className="absolute z-10 flex items-center p-3 mb-2">
            <img
              src={selectedUser.picture.medium}
              alt="Selected User Profile"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {`${selectedUser.name.first} ${selectedUser.name.last}`}
              </h2>
              <p className="text-sm text-gray-500">
                Online <span className="text-green-500">&#8226;</span> Active
              </p>
            </div>
          </div>
          <div className="w-full p-4 bg-white border-t border-gray-300 "></div>
        </>
      )}
      <div className="flex flex-col flex-grow">
        {searchMessage.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default Chat;
