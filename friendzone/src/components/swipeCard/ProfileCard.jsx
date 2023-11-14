import React from "react";

const ProfileCard = ({ user, onLike, onDislike }) => {
  return (
    <div className="p-4 bg-purple-400 rounded-lg shadow-lg dark:bg-black w-80">
      <img
        src={`https://source.unsplash.com/200x200/?person&${user.id}`}
        alt={user.name}
        className="w-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-500">{user.username}</p>
      <div className="flex justify-around mt-4">
        <button
          onClick={onDislike}
          className="p-3 text-white bg-red-500 rounded-full hover:bg-red-600"
        >
          Dislike
        </button>
        <button
          onClick={onLike}
          className="p-3 text-white bg-green-500 rounded-full hover:bg-green-600"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
