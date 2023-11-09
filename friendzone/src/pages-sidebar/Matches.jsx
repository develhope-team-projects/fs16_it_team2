import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import Loading from "../components/loading/Loading";
import { Link } from "react-router-dom";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";

const Matches = () => {
  const [users, setUsers] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users: ", error);
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleLike = (userId) => {
    // Handle like action here
    // You can add logic to update the UI or perform other actions
    // For example, you can remove the liked user from the list
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleDislike = (userId) => {
    // Handle dislike action here
    // You can add logic to update the UI or perform other actions
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-white dark:bg-black relative mt-10 flex flex-col items-center justify-center w-4/5 ">
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex w-full items-center justify-center gap-5 flex-wrap p-8">
          <button className="btn-transparent-border">
            <PiSlidersHorizontalDuotone />
          </button>
          <button className="btn-transparent-border">preference</button>
          <button className="btn-transparent-border">preference</button>
          <button className="btn-transparent-border">preference</button>
          <button className="btn-transparent-border">preference</button>
          <button className="btn-transparent-border">preference</button>
          <button className="btn-transparent-border">preference</button>
          <button className="btn-transparent-border">preference</button>
        </div>
        <hr />
        <div className="flex items-center justify-center p-5 mb-4 w-full">
          <h2 className="text-2xl text-gray-500 text-center">
            Upgrade to Gold to see people who already liked you{" "}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4  ">
          {users.map((user) => (
            <div key={user.id} className="backdrop-blur relative rounded-2xl">
              <ProfileCard user={user} />
              <div class="rounded-2xl backdrop-blur absolute top-0 left-0 w-full h-full opacity-100 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <Link
          to="/premium"
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-gold p-4 text-2xl rounded-full px-7 flex items-center"
        >
          Get Gold Now
        </Link>
      </div>
    </div>
  );
};

export default Matches;
