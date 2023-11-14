import React from "react";
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

const SidebarHamburger = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const backgroundImage = colorTheme === "dark" ? `url(${bgl})` : `url(${bgl})`;
  const menus = [
    { name: "home", link: "/app/home", icon: AiOutlineHome },
    { name: "premium", link: "/app/premium", icon: IoIceCreamOutline },
    { name: "user", link: "/app/user", icon: AiOutlineUser, margin: true },
    { name: "matches", link: "/app/matches", icon: AiOutlineHeart },
    { name: "messages", link: "/app/messages", icon: PiWechatLogo },
    {
      name: "explore",
      link: "/app/explore",
      icon: MdOutlineDashboard,
      margin: true,
    },
    {
      name: "preferences",
      link: "/app/preferences",
      icon: RiUserSearchLine,
    },

    { name: "settings", link: "/app/settings", icon: RiSettings4Line },
    {
      name: "logout",
      link: "/app/logout",
      icon: AiOutlinePoweroff,
      margin: true,
    },
  ];

  const [open, setOpen] = useState(window.innerWidth >= 1120);
  const [showIconsOnly, setShowIconsOnly] = useState(window.innerWidth < 820);

  useEffect(() => {
    const handleResize = () => {
      // Set open to false if the screen width is below 1050px
      setOpen(window.innerWidth >= 1120);
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-black ">
      <section className="flex w-full min-w-full">
        <div
          className={` bg-[#613b8c] dark:bg-[#0e0e0e] fixed top-0 left-0 min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500  text-gray-100 px-4 custom-box-shadow rounded-r-lg `}
        >
          <div
            className={`py-3 flex justify-between ${
              !open ? "flex-col-reverse gap-4 items-center" : "flex"
            }`}
          >
            <div>
              <Switcher />
            </div>

            <HiMenuAlt3
              size={26}
              className={`cursor-pointer ${
                window.innerWidth < 1120 ? "pointer-events-none" : ""
              }`}
              onClick={() => {
                if (window.innerWidth >= 1120) {
                  setOpen(!open);
                }
              }}
            />
          </div>
          <div className="relative flex flex-col gap-4 mt-4">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#57357e]  dark:hover:bg-gray-800 rounded-md `}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:z-10 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="flex w-full"
          style={{
            marginLeft: open ? "288px" : "64px", // Adjust the margin values accordingly
            transition: "margin 0.5s",
          }}
        >
          <div
            className="flex justify-center flex-1 min-h-screen bg-white dark:bg-black "
            style={{ backgroundImage, backgroundSize: "cover" }}
          >
            <Outlet className="w-full" />
          </div>
        </div>

        {/* <div className="m-3 font-semibold text-gray-900 text-x1">sideBar</div> */}
      </section>
    </div>
  );
};

export default SidebarHamburger;
