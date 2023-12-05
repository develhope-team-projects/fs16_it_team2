import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line, RiUserSearchLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { PiWechatLogo } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineUser,
} from "react-icons/ai";
import { IoIceCreamOutline } from "react-icons/io5";
import Switcher from "../../components/darkMode/Switcher";
import bgl from "../../assets/images/backgrounds/bg-light.png";

import useDarkSide from "../../customHooks/useDarkSide";
import { useEffect } from "react";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

const NavbarSm = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const backgroundImage = colorTheme === "dark" ? `url(${bgl})` : `url(${bgl})`;

  return (
    <div style={{ backgroundImage, backgroundSize: "cover" }}>
      <div>
        <TopNavbar />
        <BottomNavbar />
      </div>
      <div className=" relative mt-14 mb-14 h-full flex  justify-center w-full overflow-x-hidden ">
        <Outlet />
      </div>
    </div>
  );
};
export default NavbarSm;
