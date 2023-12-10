import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LogoutModal = () => {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div className="z-10 bg-transparent">
      <div
        id="popup-modal"
        tabIndex="-1"
        className=" flex justify-center items-center z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full ">
          <div className="relative bg-white rounded-lg custom-box-shadow dark:bg-gray-800">
            <div className="p-6 text-center">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-900 dark:text-gray-400">Are you sure you want to logout?</h3>
              <h4 className="mb-5 font-normal text-gray-800 dark:text-gray-500">
                You will continue to be seen by compatible users in your last known location
              </h4>
              <Link to="/">
                {" "}
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  onClick={() => logoutUser()}
                >
                  Logout
                </button>
              </Link>
              <Link to="/app/">
                {" "}
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
