import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line, RiUserSearchLine } from "react-icons/ri";
import { MdOutlineAddBox, MdOutlineDashboard } from "react-icons/md";
import { PiWechatLogo } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { IoIceCreamOutline } from "react-icons/io5";
import Switcher from "../../components/darkMode/Switcher";
import bgl from "../../assets/images/backgrounds/bg-light.png";

import useDarkSide from "../../customHooks/useDarkSide";
import { useEffect } from "react";

const TopNavbar = () => {
  const menus = [
    { name: "home", link: "/app/", icon: <AiOutlineHome /> },
    { name: "premium", link: "/app/premium", icon: <IoIceCreamOutline /> },
    { name: "settings", link: "/app/settings", icon: <RiSettings4Line /> },
    { name: "darkmode", icon: <Switcher /> },
    { name: "logout", link: "/app/logout", icon: <AiOutlinePoweroff /> },
  ];

  return (
    <div className="fixed z-50 w-full h-14 bg-purple-500 text-white border border-gray-200  top-0  dark:bg-black dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {menus.map((menu, index) => (
          <Link key={index} to={menu?.link} className="group">
            <div
              data-tooltip-target={`tooltip-${menu.name}`}
              className="inline-flex flex-col items-center justify-center p-5  hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              {menu.icon}
              <span className="sr-only">
                {menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}
              </span>
            </div>
          </Link>
        ))}
        {menus.map((menu, index) => (
          <div
            key={index}
            id={`tooltip-${menu.name}`}
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 group-hover:opacity-100 group-hover:visible"
          >
            {menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavbar;
