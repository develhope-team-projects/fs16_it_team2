import React from "react";
import up from "../../assets/images/icecreams/thumbsUp.png"
import down from "../../assets/images/icecreams/thumbsDown.png"

const ProfileCard = ({ user, onLike, onDislike ,smallSize}) => {
  const cardClassName = ` bg-purple-400 rounded-3xl  p-4 bg-white custom-box-shadow dark:bg-black  w-[500px] ${smallSize ? 'small-profile-card' : ''}`;
  return (
    <div className={cardClassName}>
      <img
        src={`https://source.unsplash.com/200x200/?person&${user.id}`}
        alt={user.name}
        className="w-full mx-auto mb-4 rounde-3xl"
      />
      <h2 className="text-xl font-semibold dark:text-white">{user.name}</h2>
      <p className="text-gray-500 dark:text-gray-300">{user.username}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onDislike}
          className="p-2 px-4 text-white rounded-full hover:border-red-600 hover:border-2"
        >
         <img src={down} width={70}/>
        </button>
        <button
          onClick={onLike}
          className="p-2 px-4 text-white  rounded-full hover:border-green-600 hover:border-2"
        >
          <img src={up} width={70}/>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
