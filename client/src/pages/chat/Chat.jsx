import { useContext } from "react";

import MatchedUsers from "../../components/Chat/MatchedUsers";
import ChatBox from "../../components/Chat/ChatBox";
import UserCard from "../../components/Chat/UserCard";

import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

import iceCream from "../../assets/images/icecreams/playing.png";

const Chat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, userChatsError, updateCurrentChat } = useContext(ChatContext);

  return (
    <div id="ChatContainer" className="flex flex-col w-full h-full overflow-y-scroll md:absolute flex-nowrap">
      {/* SHOW MATCHED USERS IF THERE ARE ANY */}
      <MatchedUsers />

      {/* AVAILABLE USERS CHATS (LEFT) & ACTUAL CHAT (RIGHT) */}
      {userChats?.length < 1 ? null : (
        <div id="UserChatList_and_Chat" className="flex flex-row h-screen mx-4">
          {/*  */}
          {/* USER CHATS AVAIABLE (LEFT) */}
          <div id="UserChatList" className="flex flex-col mr-2 basis-1/12">
            {isUserChatsLoading && <p>Fetching Chats..</p>}
            {userChatsError && (
              <div>
                <p>There was a problem while fetching the Chat..</p>
                <p>{userChatsError}</p>
              </div>
            )}
            {(!isUserChatsLoading && !userChats) || (!userChats?.length === 0 && <p>No Chats..</p>)}

            {/* START A CHAT NOW - CONTAINER */}
            <div id="UsersContainer" className="flex flex-col items-center mb-4">
              {/* DESCRIPTION */}
              <img src={iceCream} alt="Ice cream" width="190px" />
              <h4 className="text-2xl font-black text-red-400 dark:text-yellow-500">{user.name.toUpperCase()}, START A CHAT NOW:</h4>
            </div>

            {/* MAP ALL USER'S CONVESATION */}
            <div id="UserChatsContainer" className="flex flex-col overflow-y-auto">
              {userChats?.map((chat, index) => {
                return (
                  <div className="flex flex-col" id={`User_Card_${index + 1}`} key={index} onClick={() => updateCurrentChat(chat)}>
                    <UserCard chat={chat} user={user} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTUAL CHAT FOR CHATTING (RIGHT) */}
          <ChatBox />
        </div>
      )}
    </div>
  );
};

export default Chat;
