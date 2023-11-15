// Explore.js
import React, { useState, useEffect } from "react";
import ProfileCard from "../../components/swipeCard/ProfileCard";
import CircleComponent from "../../components/animationCircles/CircleComponent";
import IceCreamModal from "../../components/modal/IceCreamModal"

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [isIceCreamModalOpen, setIsIceCreamModalOpen] = useState(false);

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
  
    // Open the ice cream modal every 4th like
    if ((currentProfileIndex + 1) % 4 === 0) {
      setIsIceCreamModalOpen(true);
  
      // Set a timeout to close the modal after 5 seconds
      setTimeout(() => {
        setIsIceCreamModalOpen(false);
      }, 3000);
    }
  };

  const handleDislike = () => {
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  const handleCloseIceCreamModal = () => {
    setIsIceCreamModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  bg-transparent relative">
      <div className="flex flex-col items-center justify-center z-10">
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
      <CircleComponent />

      {/* Render the Ice Cream Modal */}
      {isIceCreamModalOpen && (
        <IceCreamModal onClose={handleCloseIceCreamModal} />
      )}
    </div>
  );
};

export default Explore;
