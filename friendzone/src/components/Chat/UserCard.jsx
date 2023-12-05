import { useContext } from "react";
import avatar from "../../assets/images/profilePics/avatar.svg";
import { ChatContext } from "../../context/ChatContext";
import { useFecthLatestMessage } from "../../hooks/useFetchLatestMessage";
import { useFetchRecipientUserInfo } from "../../hooks/useFetchRecipientUserInfo";
import moment from "moment";

const UserCard = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUserInfo(chat, user);
  const { latestMessage } = useFecthLatestMessage(chat);

  const { onlineUsers } = useContext(ChatContext);

  const isTheUserOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  const truncateText = (text) => {
    let shortText = text.substring(0, 20);

    if (text.length > 20) {
      shortText = shortText + "...";
    }

    return shortText;
  };

  return (
    <>
      {/* SINGLE USER CARD */}
      <div className="relative flex items-center justify-between p-2 space-x-3 text-black border-b-2 border-gray-400 cursor-pointer w-96 ">
        {/* SINGLE USER CARD - LEFT (AVATAR, NAME, SURNAME & LAST MESSAGE) */}
        <div className="flex">
          {/* AVATAR */}
          <div className="mr-2">
            <img src={avatar} alt="person-circle" width="35px" />
          </div>
          {/* NAME, SURNAME & LAST MESSAGE */}
          <div className="UserDataInfo">
            {/* NAME, SURNAME */}
            <div className="font-bold">
              {recipientUser?.name} {recipientUser?.surname}
            </div>
            {/* LAST MESSAGE TIME STAMP */}
            <div className="text-sm text-gray-500">
              {latestMessage?.text && (
                <span>{truncateText(latestMessage?.text)}</span>
              )}
            </div>
          </div>
        </div>
        {/* SINGLE USER CARD - RIGHT (TIME STAMP LAST MESSAGE) */}
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-500">
            {moment(latestMessage?.createdAt).calendar()}
          </div>
          <span
            className={
              isTheUserOnline
                ? "inline-block h-3 w-3 rounded-full bg-green-500 absolute bottom-7 left-[2.1rem] z-10"
                : ""
            }
          ></span>
        </div>
      </div>
    </>
  );
};

export default UserCard;
