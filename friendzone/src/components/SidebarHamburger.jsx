import React, { useState } from "react";
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
import Switcher from "../darkMode/Switcher";

const SidebarHamburger = () => {
  const menus = [
    { name: "home", link: "/", icon: AiOutlineHome },
    { name: "premium", link: "/premium", icon: IoIceCreamOutline },
    ,
    { name: "user", link: "/", icon: AiOutlineUser, margin: true },
    { name: "matches", link: "/matches", icon: AiOutlineHeart },
    { name: "messages", link: "/messages", icon: PiWechatLogo },
    {
      name: "explore",
      link: "/explore",
      icon: MdOutlineDashboard,
      margin: true,
    },
    {
      name: "preferences",
      link: "/preferences",
      icon: RiUserSearchLine,
    },

    { name: "settings", link: "/settings", icon: RiSettings4Line },
    { name: "logout", link: "/logout", icon: AiOutlinePoweroff, margin: true },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="dark:bg-black">
      <section className="flex w-full min-w-full">
        <div
          className={`bg-[#9A59E5] dark:bg-[#0e0e0e] fixed top-0 left-0 min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500  text-gray-100 px-4 border-r rounded-r-lg`}
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
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-purple-600  dark:hover:bg-gray-800 rounded-md `}
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
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full"
          style={{
            marginLeft: open ? "288px" : "64px", // Adjust the margin values accordingly
            transition: "margin 0.5s",
          }}
        >
          <div className="flex-1  bg-white dark:bg-black min-h-screen flex justify-center items-center ">
            <Outlet />
          </div>
        </div>

        {/* <div className="m-3 text-x1 text-gray-900 font-semibold">sideBar</div> */}
      </section>
    </div>
  );
};

export default SidebarHamburger;
