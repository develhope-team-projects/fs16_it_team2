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
              <h2 className="mb-4 text-4xl font-black text-red-400 dark:text-yellow-500">
                <span className="text-red-500">👋{user?.name.toUpperCase()}</span> ,YOU HAVE NEW MATCHES!
              </h2>
              <img src={image} alt="ice cream" width="120px" className="mb-12" />
            </div>
          </div>

          <div id="MatchedUsers_List" className="flex flex-row flex-wrap justify-center">
            {potentialChats &&
              potentialChats.map((potentialUser, index) => (
                <div
                  id={`Matched_User_${index + 1}`}
                  className="relative flex flex-col items-center p-1 mb-3 mr-4 text-white transition ease-in-out rounded-lg cursor-pointer bg-gradient-to-t hover:scale-110 to-sky-500 from-purple-500 hover:to-sky-600 hover:from-purple-600 dark:to-sky-600 dark:from-purple-600 dark:hover:to-sky-400 dark:hover:from-purple-500"
                  key={index}
                  onClick={() => createChat(user._id, potentialUser._id)}
                >
                  <img className="w-12 h-12 rounded-full " src={potentialUser.picture} alt="Potential User Pic" />
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
