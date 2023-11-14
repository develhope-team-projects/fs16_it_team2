import React from "react";

const InputBox = ({
  message,
  handleInputBoxChange,
  handleMessageSubmit,
  isChatSelected,
}) => (
  <form onSubmit={handleMessageSubmit} className="flex items-center">
    <input
      className="flex-grow p-2 mr-2 border rounded"
      type="text"
      value={message}
      onChange={handleInputBoxChange}
      placeholder={
        isChatSelected ? "Write your message" : "Select a user to chat"
      }
      disabled={!isChatSelected}
    />
    <button
      className={`px-4 py-2 text-white bg-blue-500 rounded ${
        !isChatSelected && "opacity-50 cursor-not-allowed"
      }`}
      type="submit"
      disabled={!isChatSelected}
    >
      Send
    </button>
  </form>
);

export default InputBox;
