import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

import image from "../../assets/images/icecreams/2icecrm.png";

const MatchedUsers = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);
  const { onlineUsers } = useContext(ChatContext);

  return (
    <>
      {potentialChats?.length > 0 && (
        <div id="MatchedUsers_Container" className="p-4 m-4 text-center border-2 border-violet-900 dark:border-purple-700 rounded-xl ">
          <div id="MatchedUsers_Description">
            <div id="Matched_User_Title" className="flex flex-row items-center justify-center">
              <h2 className="mb-4 text-4xl font-black text-red-400 dark:text-yellow-500">YOU HAVE NEW MATCHES!</h2>
              <img src={image} alt="ice cream" width="120px" className="mb-12" />
            </div>
          </div>

          <div id="MatchedUsers_List" className="flex flex-row flex-wrap justify-center">
            {potentialChats &&
              potentialChats.map((potentialUser, index) => (
                <div
                  id={`Matched_User_${index + 1}`}
                  className="relative p-1 mb-2 mr-2 text-white transition bg-blue-500 rounded-lg cursor-pointer max-w-fit hover:bg-blue-700 focus:ring-blue-300 dark:hover:bg-blue-600"
                  key={index}
                  onClick={() => createChat(user._id, potentialUser._id)}
                >
                  {potentialUser.name} {potentialUser.surname}
                  <span
                    id={`Matched_User${index + 1}_online_status`}
                    className={
                      onlineUsers?.some((user) => user?.userId === potentialUser?._id)
                        ? "inline-block h-3 w-3 rounded-full bg-green-500 absolute -top-1 -right-1 z-10"
                        : ""
                    }
                  ></span>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MatchedUsers;
