import React, { useState } from "react";
import SearchBar from "../../components/chat/chatSearchBar/SearchBar";
import UserList from "../../components/chat/UserList";
import Chats from "../../components/chat/Chats";
import InputBox from "../../components/Chat/InputBox";
import Logo from "../../components/Chat/chatSearchBar/Logo";

const Index = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleInputBoxChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSearchWordInputChange = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { text: message, sender: selectedUser }]);
      setMessage("");
    }
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    handleSendMessage();
  };

  const handleSelectUser = (user) => {
    setChat([]);
    setSelectedUser(user);
  };

  const searchMessage = chat
    .filter((message) => message.sender === selectedUser)
    .filter((message) =>
      message.text.toLowerCase().includes(searchWord.toLowerCase())
    );

  const isChatSelected = selectedUser !== null;

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex items-center justify-between p-4 text-white bg-[#552888] dark:bg-[#0e0e0e] custom-box-shadow">
        <Logo />
        <SearchBar
          searchWord={searchWord}
          handleSearchWordInputChange={handleSearchWordInputChange}
        />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="flex">
          <UserList
            onSelectUser={handleSelectUser}
            selectedUser={selectedUser}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex-grow overflow-y-scroll ">
            <Chats searchMessage={searchMessage} selectedUser={selectedUser} />
          </div>
          <InputBox
            message={message}
            handleInputBoxChange={handleInputBoxChange}
            handleMessageSubmit={handleMessageSubmit}
            isChatSelected={isChatSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
