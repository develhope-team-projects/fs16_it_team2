import React, { useEffect, useState, useContext } from "react";
import TinderCard from "react-tinder-card";
import IceCreamModal from "../../components/modal/IceCreamModal";
import { AuthContext } from "../../context/AuthContext";
import "../../components/profileCard/profileCard.css"
import Loading from "../../components/loading/Loading"

function Explore() {
  const [lastDirection, setLastDirection] = useState();
  const [swipeCount, setSwipeCount] = useState(0);
  const [showIceCreamModal, setShowIceCreamModal] = useState(false);
  const { user: currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    setSwipeCount((prevCount) => prevCount + 1);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const result = await response.json();

      console.log("API response:", result);

      if (response.ok) {
        // Filter out the current user
        const filteredUsers = result.filter(
          (user) => user._id !== currentUser?._id
        );
        setData(filteredUsers);
        setLoading(false);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentUser]); // Include currentUser in the dependency array to refetch data when the user changes

  useEffect(() => {
    if (swipeCount % 4 === 0 && swipeCount > 0) {
      setShowIceCreamModal(true);
      const timeoutId = setTimeout(() => {
        setShowIceCreamModal(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [swipeCount]);

  if (loading) return <Loading />;

  return (
    <div className="dashboard w-full relative h-full">
      <div className="swipe-container">
        <div className="card-container">
          {data.map((character, index) => (
            <TinderCard
              className="swipe"
              key={index}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${character.picture})` }}
                className="card"
              >
                <h3 className="">{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      {showIceCreamModal && <IceCreamModal />}
    </div>
  );
}

export default Explore;
