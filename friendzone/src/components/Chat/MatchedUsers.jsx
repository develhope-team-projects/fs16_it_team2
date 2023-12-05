import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const MatchedUsers = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat } = useContext(ChatContext);
  const { onlineUsers } = useContext(ChatContext);

  return (
    <>
      {potentialChats?.length > 0 && (
        <div
          id="MatchedUsers_Container"
          className="p-4 mb-4 text-center border-4 rounded-xl"
        >
          <div id="MatchedUsers_Description">
            <div id="Matched_User_Title">
              <h2 className="mb-4 text-2xl font-bold text-purple-600">
                YOU HAVE NEW MATCHES!
              </h2>
            </div>
          </div>

          <div id="MatchedUsers_List" className="flex flex-row">
            {potentialChats &&
              potentialChats.map((potentialUser, index) => (
                <div
                  id={`Matched_User_${index + 1}`}
                  className="relative p-1 mr-2 text-white bg-blue-500 rounded-lg cursor-pointer max-w-fit"
                  key={index}
                  onClick={() => createChat(user._id, potentialUser._id)}
                >
                  {potentialUser.name} {potentialUser.surname}
                  <span
                    id={`Matched_User${index + 1}_online_status`}
                    className={
                      onlineUsers?.some(
                        (user) => user?.userId === potentialUser?._id
                      )
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
