import { useState } from "react";
import { longList } from "./data";
import { Link } from "react-router-dom";

const PremiumCard = () => {
  const [people, setPeople] = useState(longList);
  const gradientClasses = {
    Gold: "bg-gradient-to-r from-yellow-300 to-yellow-500 p-4  rounded-full",
    Platinum: "bg-gradient-to-r from-gray-300 to-gray-500 p-3  rounded-full",
    Plus: "bg-gradient-to-r from-pink-300 to-pink-500 p-3 rounded-full ",
  };

  return (
    <div className="flex justify-center items-center gap-3">
      {people.map((person, personIndex) => {
        const { id, icon, name, title, type, price } = person;
        const typeClass = gradientClasses[type] || "";
        const isGoldType = type === "Gold";
        const isPlatinum = type === "Platinum";
        const isPlus = type === "Plus";
        return (
          <div
            className={`w-full max-w-sm p-4 bg-white  border-2 rounded-3xl shadow sm:p-8 dark:bg-black dark:border-gray-700 ${
              type == "Gold" ? "mt-5" : "mt-0"
            }`}
            key={personIndex}
          >
            <h5
              className={`text-center mb-4 text-xl font-medium text-gray-800 ${typeClass}
               `}
            >
              {type}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {price}
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400">
                 Unlimited Likes
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400">
                  See Who Likes You
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400">
                  Unlimited Rewinds
                </span>
              </li>
              <li
                className={`flex space-x-3 ${
                  isPlus && "line-through"
                } decoration-gray-500 `}
              >
                <svg
                  className={`flex-shrink-0 w-4 h-4 ${
                    isGoldType || isPlatinum
                      ? "text-blue-600"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400">
                  1 Free Boost per month
                </span>
              </li>
              <li
                className={`flex space-x-3 ${
                  isPlus && "line-through"
                } decoration-gray-500 `}
              >
                <svg
                  className={`flex-shrink-0 w-4 h-4 ${
                    isGoldType || isPlatinum
                      ? "text-blue-600"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400 ">
                 5 free super likes
                </span>
              </li>
              <li
                className={`flex space-x-3 ${
                  isPlus || isPlatinum ? "line-through" : ""
                } decoration-gray-500 `}
              >
                <svg
                  className={`flex-shrink-0 w-4 h-4 ${
                    isGoldType
                      ? "text-blue-600"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400">
                  Control who sees you
                </span>
              </li>
              <li
                className={`flex space-x-3 ${
                  isPlus || isPlatinum ? "line-through" : ""
                } decoration-gray-500 `}
              >
                <svg
                  className={`flex-shrink-0 w-4 h-4 ${
                    isGoldType
                      ? "text-blue-600"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500  dark:text-gray-400">
                  Control your profile
                </span>
              </li>
            </ul>
            <Link to="/payment">
              <button
                type="button"
                className={`text-white  ${typeClass}
               focus:ring-4 focus:outline-none hover:border-gray-500 hover:border-2 focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}
              >
                Choose plan
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PremiumCard;
