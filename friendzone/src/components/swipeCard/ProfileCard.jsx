import React from "react";

const ProfileCard = ({ user, onLike, onDislike }) => {
  return (
    <div className="dark:bg-black bg-purple-400 rounded-lg p-4 shadow-lg w-80">
      <img
        src={`https://source.unsplash.com/200x200/?person&${user.id}`}
        alt={user.name}
        className="w-full  mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-500">{user.username}</p>
      <div className="mt-4 flex justify-around">
        <button
          onClick={onDislike}
          className="bg-red-500 text-white rounded-full p-3 hover:bg-red-600"
        >
          Dislike
        </button>
        <button
          onClick={onLike}
          className="bg-green-500 text-white rounded-full p-3 hover:bg-green-600"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
