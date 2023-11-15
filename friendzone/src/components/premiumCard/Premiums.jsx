import React, { useState } from "react";
import { IoIceCreamSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Premiums = ({ title, color, type, prices }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className={`flex flex-wrap gap-7 mt-8 p-4 bg-transparent`}>
        <div className={`w-full m-auto border-2 rounded-3xl custom-box-shadow`}>
          <div
            className={`rounded-t-3xl flex items-center justify-center bg-gradient-to-t from-white to-${color}-300 dark:from-black dark:to-${color}-600 opacity-80`}
          >
            <h3 className={`text-4xl text-slate-900 dark:text-white p-7 `}>
              {title}
            </h3>
          </div>
          <div className={`flex flex-col gap-5 dark:text-gray-200`}>
            <h2 className={`text-4xl text-center`}>
              see who likes you with {title}
            </h2>
            <h2 className={`text-3xl px-3 text-center`}>
              Your new friends are waiting for you
            </h2>
            <h4 className={`dark:text-gray-400`}>Select a Plan</h4>
          </div>
          <ul
            className={`flex mb-0 list-none pt-3 pb-4 flex-row`}
            role="tablist"
          >
            {prices.map((price, index) => (
              <li
                key={index}
                className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 border-2 rounded-3xl ${
                  openTab === index + 1 ? `border-2 border-${color}-500` : ``
                }`}
              >
                <a
                  className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-3xl leading-normal h-40 flex flex-col justify-between`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  role="tablist"
                >
                  <div className={`flex flex-col`}>
                    <h3
                      className={`${
                        color === "zinc" ? "text-zinc-500" : `text-${color}-500`
                      }`}
                    >
                      {price.title}
                    </h3>
                    <h1 className={`text-2xl`}>{price.duration}</h1>
                  </div>
                  <div className={`text-start`}>{price.price}/wk</div>
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`relative flex flex-col p-2 min-w-0 break-words bg-white dark:bg-black border-2 rounded-3xl w-full shadow-lg`}
          >
            <div className={`px-4 py-5 flex-auto`}>
              <div className={`tab-content tab-space`}>
                {prices.map((price, index) => (
                  <div
                    key={index}
                    className={
                      openTab === index + 1 ? `flex justify-between` : `hidden`
                    }
                  >
                    <div className={`flex`}>
                      <div
                        className={`${
                          color === "zinc"
                            ? "text-zinc-500"
                            : `text-${color}-500`
                        }`}
                      >
                        <IoIceCreamSharp
                          size={50}
                          className={`${
                            color === "zinc"
                              ? "text-zinc-500"
                              : `text-${color}-500`
                          }`}
                        />
                      </div>
                      <div>
                        <div className={`dark:text-gray-200 text-3xl`}>
                          {price.duration}
                        </div>
                        <p className={`dark:text-gray-100 text-xl`}>
                          {price.price}/week
                        </p>
                      </div>
                    </div>
                    <Link to="/payment">
                      <div
                        className={`btn text-base rounded-full px-9 py-3 bg-gradient-to-r from-${color}-200 to-${color}-600`}
                      >
                        Continue
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premiums;