import React, { useState, useEffect } from "react";
import ProfileCard from "../../components/swipeCard/ProfileCard";

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    }

    fetchUsers();
  }, []);

  const handleLike = () => {
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  const handleDislike = () => {
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 bg-white dark:bg-black">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="mb-4 text-2xl font-semibold">Explore</h1>
        {users.map(
          (user, index) =>
            index === currentProfileIndex && (
              <ProfileCard
                key={user.id}
                user={user}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Explore;
