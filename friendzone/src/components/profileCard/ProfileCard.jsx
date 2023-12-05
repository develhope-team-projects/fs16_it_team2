import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import "./profileCard.css";
import IceCreamModal from "../modal/IceCreamModal";
import img1 from "../../assets/images/profilePictures/1.jpeg"
import img2 from "../../assets/images/profilePictures/2.jpeg"
import img3 from "../../assets/images/profilePictures/3.jpeg"
import img4 from "../../assets/images/profilePictures/4.jpeg"
import img5 from "../../assets/images/profilePictures/5.jpeg"
import img6 from "../../assets/images/profilePictures/6.jpeg"
import img7 from "../../assets/images/profilePictures/7.jpeg"
import img8 from "../../assets/images/profilePictures/8.jpeg"
import img9 from "../../assets/images/profilePictures/9.jpeg"
import img10 from "../../assets/images/profilePictures/10.jpeg"



function ProfileCard({ user }) {
  const characters = [
    {
      name: "Richard Hendricks",
      url: img1,
      url1: "https://i.imgur.com/oPj4A8u.jpeg",
    },
    {
      name: "Erlich Bachman",
      url: img2,
      url1: "https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg",
    },
    {
      name: "Monica Hall",
      url: img3,
      url1: "https://i.imgur.com/Q9WPlWA.jpeg",
     
    },
    {
      name: "Jared Dunn",
      url: img4,
      url1: "https://i.imgur.com/MWAcQRM.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: img5,
      url1: "https://i.imgur.com/wDmRJPc.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: img6,
      url1: "https://i.imgur.com/OckVkRo.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: img7,
      url1: "https://i.imgur.com/H07Fxdh.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: img8,
      url1: "https://i.imgur.com/dmwjVjG.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: img9,
      url1: "https://i.imgur.com/Lnt9K7l.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: img10,
      url1: "https://i.imgur.com/Gg6BpGn.jpeg",
    },
  ];
  const [lastDirection, setLastDirection] = useState();
  const [swipeCount, setSwipeCount] = useState(0);
  const [showIceCreamModal, setShowIceCreamModal] = useState(false);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    setSwipeCount((prevCount) => prevCount + 1);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  useEffect(() => {
    if (swipeCount % 4 === 0 && swipeCount > 0) {
      setShowIceCreamModal(true);
      const timeoutId = setTimeout(() => {
        setShowIceCreamModal(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [swipeCount]);


  return (
    <div className="dashboard mt-10">
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character,index) => (
            <TinderCard
              className="swipe"
              key={index}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      {showIceCreamModal && <IceCreamModal />}
    </div>
  );
}

export default ProfileCard;
