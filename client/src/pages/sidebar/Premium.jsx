import React from "react";
import PremiumCard from "../../components/premiumCard/PremiumCard";
import CircleComponent from "../../components/animationCircles/CircleComponent";

const Premium = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-transparent ">
      <PremiumCard />
      <CircleComponent />
    </div>
  );
};

export default Premium;
