import React from "react";
import SidebarHamburger from "../components/sidebar/SidebarHamburger";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div >
      <SidebarHamburger />
    </div>
  );
};

export default DefaultLayout;
