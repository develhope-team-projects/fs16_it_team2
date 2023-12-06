import React from "react";
import LogoutModal from "../../components/logout/LogoutModal";
import CircleComponent from "../../components/animationCircles/CircleComponent";

const Logout = () => {
  return (
    <div className="relative flex  justify-center w-full bg-transparent h-screen">
      <CircleComponent />
      <LogoutModal />   
    </div>
  );
};

export default Logout;
