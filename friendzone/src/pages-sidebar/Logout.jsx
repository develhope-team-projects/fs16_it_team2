import React from "react";
import LogoutModal from "../components/logout/LogoutModal";
import CircleComponent from "../components/animation_circles/CircleComponent";

const Logout = () => {
  return (
    <div className=" bg-transparent flex items-center justify-center relative w-full" >
      <LogoutModal />
     
      
        <CircleComponent />
  
    </div>
  );
};

export default Logout;
