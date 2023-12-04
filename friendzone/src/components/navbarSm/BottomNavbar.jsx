// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   AiOutlineHome,
//   AiOutlinePoweroff,
//   AiOutlineUser,
//   AiOutlineHeart,
// } from "react-icons/ai";
// import { IoIceCreamOutline } from "react-icons/io5";
// import { MdOutlineDashboard } from "react-icons/md";
// import { PiWechatLogo } from "react-icons/pi";
// import { RiUserSearchLine, RiSettings4Line } from "react-icons/ri";
// import Switcher from "../../components/darkMode/Switcher";

// const BottomNavbar = () => {
//   const menus = [
//     { name: "home", link: "/app/", icon: <AiOutlineHome /> },
//     { name: "premium", link: "/app/premium", icon: <IoIceCreamOutline /> },
//     { name: "user", link: "/app/", icon: <AiOutlineUser />, margin: true },
//     { name: "matches", link: "/app/matches", icon: <AiOutlineHeart /> },
//     { name: "messages", link: "/app/messages", icon: <PiWechatLogo /> },
//     {
//       name: "explore",
//       link: "/app/explore",
//       icon: <MdOutlineDashboard />,
//       margin: true,
//     },
//     { name: "preferences", link: "/app/preferences", icon: <RiUserSearchLine /> },
//     { name: "settings", link: "/app/settings", icon: <RiSettings4Line /> },
//     { name: "logout", link: "/app/logout", icon: <AiOutlinePoweroff />, margin: true },
//   ];

//   return (
//     <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
//       <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
//         {menus.map((menu, index) => (
//           <Link key={index} to={menu.link} className="group">
//             <div
//               data-tooltip-target={`tooltip-${menu.name}`}
//               className={`inline-flex flex-col items-center justify-center px-5 ${
//                 menu.margin ? "rounded-s-full" : ""
//               } hover:bg-gray-50 dark:hover:bg-gray-800 group`}
//             >
//               {menu.icon}
//               <span className="sr-only">{menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}</span>
//             </div>
//           </Link>
//         ))}
//         {menus.map((menu, index) => (
//           <div
//             key={index}
//             id={`tooltip-${menu.name}`}
//             role="tooltip"
//             className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 group-hover:opacity-100 group-hover:visible"
//           >
//             {menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}
//             <div className="tooltip-arrow" data-popper-arrow></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BottomNavbar;

import { RiUserSearchLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { PiWechatLogo } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";

import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

const BottomNavbar = () => {
  const menus = [
    { name: "user", link: "/app/", icon: <AiOutlineUser />, margin: true },
    { name: "matches", link: "/app/matches", icon: <AiOutlineHeart /> },
    { name: "messages", link: "/app/messages", icon: <PiWechatLogo /> },
    {
      name: "explore",
      link: "/app/explore",
      icon: <MdOutlineDashboard />,
      margin: true,
    },
    {
      name: "preferences",
      link: "/app/preferences",
      icon: <RiUserSearchLine />,
    },
  ];

  return (
    <div className="fixed text-white z-50 w-full h-14 max-w-full  bg-purple-500 border-t bottom-0  dark:bg-black custom-box-shadow">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {menus.map((menu, index) => (
          <Link key={index} to={menu.link} className="group flex items-center justify-center">
            <div
              data-tooltip-target={`tooltip-${menu.name}`}
              className={`inline-flex flex-col items-center justify-center p-4${
                menu.margin ? "rounded-s-full" : ""
              } hover:bg-gray-50 dark:hover:bg-gray-800 group`}
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

export default BottomNavbar;
