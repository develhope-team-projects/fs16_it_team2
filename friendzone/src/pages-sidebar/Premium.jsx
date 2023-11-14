import React from "react";
import PremiumCard from "../components/premiumCard/PremiumCard";
import CircleComponent from "../components/animation_circles/CircleComponent";

const Premium = () => {
  return (
    <div className=" bg-transparent flex justify-center items-center w-full h-full relative">
      <PremiumCard  />
      <CircleComponent />
    </div>
  );
};

export default Premium;
