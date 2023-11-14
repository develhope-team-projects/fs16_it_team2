import React, { useEffect, useState } from "react";

const UserList = ({ onSelectUser, selectedUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=299")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  const handleUserClick = (user) => {
    onSelectUser(user);
  };

  return (
    <div className="w-64 p-4 overflow-y-scroll bg-transparent">
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            key={index}
            className={`flex items-center p-2 space-x-3 border-2 border-gray-800 rounded-lg cursor-pointer ${
              selectedUser && selectedUser.login.uuid === user.login.uuid
                ? "bg-blue-200"
                : "bg-white"
            }`}
            onClick={() => handleUserClick(user)}
          >
            <img
              className="w-10 h-10 rounded-full"
              src={user.picture.medium}
              alt="Profile"
            />
            <span className="font-medium text-gray-900">{`${user.name.first} ${user.name.last}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
