import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "../../components/profileCard/profileCard.css";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/loading/Loading";
import { HiHeart } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6"
import { FaUndoAlt } from "react-icons/fa"

function Explore() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const { user: currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const childRefs = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((_, index) => React.createRef()),
    [data]
  );

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

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < data.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    if (childRefs[idx] && currentIndexRef.current >= idx) {
      childRefs[idx].current && childRefs[idx].current.restoreCard();
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < data.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  if (loading)
    return (
      <div className="w-full relative">
        <Loading />
      </div>
    );

  return (
    <div className="dashboard w-full relative md:h-full overflow-hidden bg-transparent">
      <div className="mainContainer flex flex-col items-center w-full">
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <div className="cardContainer">
          {data &&
            data.map((character, index) => (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.picture + ")" }}
                  className="card"
                >
                  <h3 className="">{character.name}</h3>
                </div>
              </TinderCard>
            ))}
        </div>
        <div className="buttons">
          <button
              className="text-4xl text-red-500"
            onClick={() => swipe("left")}
          >
          <FaXmark />
          </button>
          <button
                className="text-4xl text-blue-500"
            onClick={() => goBack()}
          >
            <FaUndoAlt />
          </button>
          <button
          className="text-4xl text-green-500"
            onClick={() => swipe("right")}
          >
            <HiHeart/>
          </button>
        </div>
        {lastDirection ? (
          <h2 key={lastDirection} className="infoText hidden md:block">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="infoText hidden md:block">
            Swipe a card or press a button to get Restore Card button visible!
          </h2>
        )}
      </div>
    </div>
  );
}
export default Explore;
