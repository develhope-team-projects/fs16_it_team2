import { useContext } from "react";

import MatchedUsers from "../../components/Chat/MatchedUsers";
import ChatBox from "../../components/Chat/ChatBox";
import UserCard from "../../components/Chat/UserCard";

import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, userChatsError, updateCurrentChat } =
    useContext(ChatContext);

  return (
    <div
      id="ChatContainer"
      className="flex flex-col justify-center mx-auto ml-10"
    >
      {/* SHOW MATCHED USERS IF THERE ARE ANY */}
      <MatchedUsers />

      {/* AVAILABLE USERS CHATS & ACTUAL CHAT */}
      {userChats?.length < 1 ? null : (
        <div id="UserChatList_and_Chat" className="flex flex-row space-x-4">
          {/* USER CHATS AVAIABLE */}
          <div id="UserChatList">
            {isUserChatsLoading && <p>Fetching Chats..</p>}

            {userChatsError && (
              <div>
                <p>There was a problem while fetching the Chat..</p>
                <p>{userChatsError}</p>
              </div>
            )}

            {(!isUserChatsLoading && !userChats) ||
              (!userChats?.length === 0 && <p>No Chats..</p>)}

            {userChats?.map((chat, index) => {
              return (
                <div
                  id={`User_Card_${index + 1}`}
                  key={index}
                  onClick={() => updateCurrentChat(chat)}
                >
                  <UserCard chat={chat} user={user} />
                </div>
              );
            })}
          </div>

          {/* ACTUAL CHAT FOR CHATTING */}
          <ChatBox />
        </div>
      )}
    </div>
  );
};

export default Chat;
