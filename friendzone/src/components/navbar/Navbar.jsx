import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../logo/Logo";
import logoNav from "../../assets/images/brand/logo-ice-cream-and-name-row.png";
import Switcher from "../../components/darkMode/Switcher";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  { name: "About Us", path: "/about-us" },
  {
    name: "Support",
    path: "/support",
  },
];
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState("menu");
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuIcon((prevIcon) => (prevIcon === "menu" ? "close" : "menu"));
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    { name: "About Us", path: "/about-us" },
    {
      name: "Support",
      path: "/support",
    },
  ];

  return (
    <nav className="p-5 bg-transparent shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl cursor-pointer">
          <img
            className="h-10 inline"
            src={logoNav}
            alt="Logo"
          />
        
        </span>

        <span className="text-3xl text-white cursor-pointer mx-2 md:hidden block">
          <ion-icon name={menuIcon} onClick={handleToggleMenu}></ion-icon>
        </span>
      </div>

      <ul
        className={`md:flex md:items-center ${
          menuVisible
            ? "z-[-1] md:z-auto md:static absolute bg-opacity-70 bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[30px] transition-all ease-in duration-500"
            : "hidden"
          }`}
      >
        <li> <Switcher/> </li>
        {navLinks.map((link, index) => (
          <li key={index} className="mx-4 my-6 md:my-0">
            <Link
              to={link.path}
              className="text-xl text-white hover:text-cyan-500 duration-500"
            >
              {link.name}
            </Link>
          </li>
        ))}

         <Link to="/login">
            <button className=" text-white px-5 py-2 rounded-full hover:text-[#e058cc]">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className=" text-white px-5 py-2 rounded-full hover:text-[#e058cc]">
              Sign Up
            </button>
          </Link>
      
      </ul>
    </nav>
  );
};

export default Navbar;

