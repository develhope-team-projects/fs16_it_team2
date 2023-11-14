import React from "react";
import LogoutModal from "../../components/logout/LogoutModal";
import CircleComponent from "../../components/animationCircles/CircleComponent";

const Logout = () => {
  return (
    <div className="relative flex items-center justify-center w-full bg-transparent ">
      <LogoutModal />

      <CircleComponent />
    </div>
  );
};

export default Logout;
