import React from "react";
import { Link } from "react-router-dom";
import img from "./luca_ice_cream.jpg";
import { RiSettings4Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";

import { BsFillCameraFill, BsPlusCircleFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

const MyProfileCard = () => {
  return (
    <div>
      <div className="w-full bg-transparent">
        <div className="flex justify-end px-4 pt-4 lg:pt-0">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 lg:pb-0">
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center p-3 border-8 border-gray-500 rounded-full border-l-purple-600">
              <img
                className="rounded-full shadow-lg w-40 h-40 sm:w-72 sm:h-72"
                src={img}
                alt="Bonnie image"
              />
            </div>
            <Link
              to="/app/editprofile"
              className="absolute bottom-0 inline-flex items-center px-11 py-1 text-base sm:px-11 sm:py-3 sm:text-2xl font-medium text-center text-white bg-purple-500 border border-gray-300 rounded-full hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              30% Complete
            </Link>
          </div>

          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Luca Reina
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Develhope
          </span>
          <div className="flex justify-between w-full mt-4">
            <div className="w-full ">
              <Link to="/app/settings" className="flex justify-center mb-10">
                <div className="flex flex-col items-center ">
                  <div className=" p-2 sm:p-4 bg-transparent border-2 border-purple-500 rounded-full hover:bg-purple-100 focus:ring-blue-300 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                    <RiSettings4Line size={24} className="fill-purple-500" />
                  </div>

                  <h2 className="mt-1 text-xl text-gray-500">Settings</h2>
                </div>
              </Link>
            </div>
            <div className="w-full">
              <Link
                to="/app/addmedia"
                className="flex flex-col items-center mt-6 "
              >
                <div className="relative  p-4 sm:p-6  bg-purple-500 border-2 border-purple-500 rounded-full hover:bg-purple-600 focus:ring-blue-300 dark:hover:bg-purple-700 dark:focus:ring-blue-800">
                  <BsFillCameraFill size={26} className="fill-white" />
                  <div className="absolute bottom-0 right-0 ">
                    <AiFillPlusCircle size={22} className="fill-white " />
                  </div>
                </div>

                <h2 className="mt-1 text-xl text-gray-500">Add media</h2>
              </Link>
            </div>
            <div className="w-full">
              <Link
                to="/app/editprofile"
                className="flex flex-col items-center mb-10 "
              >
                <div className="p-2 sm:p-4 bg-transparent border-2 border-purple-500 rounded-full hover:bg-purple-100 focus:ring-blue-300 dark:hover:bg-gray-900 dark:focus:ring-blue-800">
                  <FaPencilAlt size={24} className="fill-purple-500" />
                </div>

                <h2 className="mt-1 text-xl text-gray-500">Edit Profile</h2>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCard;
