import TinderCard from "react-tinder-card";
import { useState } from "react";
import "./profileCard.css";

function ProfileCard({ user }) {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://i.imgur.com/oPj4A8u.jpeg",
    },
    {
      name: "Erlich Bachman",
      url: "https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg",
    },
    {
      name: "Monica Hall",
      url: "https://i.imgur.com/Q9WPlWA.jpeg",
    },
    {
      name: "Jared Dunn",
      url: "https://i.imgur.com/MWAcQRM.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/wDmRJPc.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/OckVkRo.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/H07Fxdh.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/dmwjVjG.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/Lnt9K7l.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://i.imgur.com/Gg6BpGn.jpeg",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
