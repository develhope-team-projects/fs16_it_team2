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

  const isTheUserOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

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
      <div className="relative flex items-center justify-between p-2 space-x-3 text-black active:bg-black dark:hover:bg-violet-900 hover:bg-violet-400 cursor-pointer min-w-[19rem] md:min-w-[14rem] lg:min-w-[24rem] dark:active:bg-violet-500 rounded-2xl border-2 transition border-violet-800 mb-1">
        {/* SINGLE USER CARD - LEFT (AVATAR, NAME, SURNAME & LAST MESSAGE) */}
        <div className="flex">
          {/* AVATAR */}
          <div className="mr-3">
            <img src={recipientUser?.picture} alt="person-circle" className="rounded-full w-11 h-11" />
          </div>
          {/* NAME, SURNAME & LAST MESSAGE */}
          <div className="UserDataInfo">
            {/* NAME, SURNAME */}
            <div className="text-lg font-bold tracking-wide dark:text-sky-500">
              {recipientUser?.name} {recipientUser?.surname}
            </div>
            {/* LAST MESSAGE TIME STAMP */}
            <div className="hidden text-sm text-gray-500 lg:block dark:text-gray-300">
              {latestMessage?.text && <span>{truncateText(latestMessage?.text)}</span>}
            </div>
          </div>
        </div>
        {/* SINGLE USER CARD - RIGHT (TIME STAMP LAST MESSAGE) */}
        <div className="flex flex-col items-end">
          <div className="flex text-sm text-gray-500 md:hidden lg:flex dark:text-gray-400">{moment(latestMessage?.createdAt).calendar()}</div>
          <span className={isTheUserOnline ? "inline-block h-3 w-3 rounded-full bg-green-500 absolute bottom-9 left-[2.3rem] z-10" : ""}></span>
        </div>
      </div>
    </>
  );
};

export default UserCard;
