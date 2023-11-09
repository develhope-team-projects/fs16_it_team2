import React from "react";
import SidebarHamburger from "../components/SidebarHamburger";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div >
      <SidebarHamburger />
    </div>
  );
};

export default DefaultLayout;
