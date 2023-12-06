import React from "react";

const CircleComponent = () => {
  const circleCount = 19; // Adjust this based on your requirement

  const circles = Array.from({ length: circleCount }, (_, index) => (
    <span
      key={index}
      className={`content__badges_circle circle-${index + 1}`}
    ></span>
  ));

  return (
    <div>
      {circles}
      <span className="circle-16"></span>
      <span className="circle-17"></span>
      <span className="circle-18"></span>
      <span className="circle-19"></span>
    </div>
  );
};

export default CircleComponent;
