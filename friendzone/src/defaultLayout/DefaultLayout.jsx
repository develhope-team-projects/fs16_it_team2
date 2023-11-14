import React from "react";
/* import SidebarHamburger from "../components/sidebar/SidebarHamburger"; */
import { Outlet } from "react-router-dom";
import LandingPage from "../components-lp/landing-page/LandingPage";

const DefaultLayout = () => {
  return (
    <div >
      <LandingPage />
      
{/*       <SidebarHamburger /> */}
    </div>
  );
};

export default DefaultLayout;
