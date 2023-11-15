import React, { useState, useEffect } from "react";
import ProfileCard from "../../components/swipeCard/ProfileCard";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import CircleComponent from "../../components/animationCircles/CircleComponent";

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
    <div className="relative flex flex-col items-center justify-center w-full mt-10 bg-transparent">
      <div className="relative flex flex-col items-center justify-center w-4/5 z-10">
        <div className="flex flex-wrap items-center justify-center w-full gap-5 p-8">
          <button className="btn-transparent-border custom-box-shadow">
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
        <div className="flex items-center justify-center w-full p-5 mb-4">
          <h2 className="text-2xl text-center text-gray-500">
            Upgrade to Gold to see people who already liked you{" "}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 ">
          {users.map((user) => (
            <div key={user.id} className="relative backdrop-blur rounded-2xl ">
              <ProfileCard user={user} smallSize />
              <div class="rounded-2xl backdrop-blur absolute top-0 left-0 w-full h-full opacity-100 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <Link
          to="/app/premium"
          className="fixed flex items-center p-4 text-2xl transform -translate-x-1/2 rounded-full bottom-20 left-1/2 bg-gradient-gold px-7"
        >
          Get Gold Now
        </Link>
      </div>
      <CircleComponent />
    </div>
  );
};

export default Matches;
