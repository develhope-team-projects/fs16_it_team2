import React from "react";
import { useState } from "react";

import { IoIceCreamSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const PremiumGold = ({ type, price, title }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap gap-7 mt-8 p-4 rounded-3xl ">
        <div className="w-full m-auto  border-2 rounded-3xl">
          <div className="rounded-3xl flex flex-col gap-5 mb-8  ">
            <div className="rounded-t-3xl flex items-center justify-center bg-gradient-to-t from-white to-yellow-300 dark:from-black dark:to-yellow-700 opacity-80">
              <h3 className="text-4xl text-slate-900 dark:text-white p-7 ">
                FRIENDZONE GOLD
              </h3>
            </div>
            <div className="flex flex-col items-center gap-5 dark:text-gray-200">
              <h2 className="text-4xl ">
                see who likes you with Friendzone Gold
              </h2>
              <h2 className="text-3xl">
                Your new friends are waiting for you{" "}
              </h2>
              <h4 className="dark:text-gray-400">Select a Plan</h4>
            </div>
          </div>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 border-2 rounded-3xl ${
                openTab === 1 ? "border-2 border-yellow-500" : ""
              }`}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal  h-40 flex flex-col justify-between"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {" "}
                <div className="flex flex-col">
                  <h3 className="text-yellow-500">Popular</h3>
                  <h1 className="text-2xl">1 week</h1>
                </div>
                <div className="text-start">20.00/wk</div>
              </a>
            </li>
            <li
              className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 border-2 rounded-3xl ${
                openTab === 2 ? "border-2 border-yellow-500" : ""
              }`}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal  h-40 flex flex-col justify-between"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div>
                  <h1 className="text-2xl"> 1 Month</h1>
                </div>
                <div className="flex justify-between items-center">
                  <div>€10.99/wk</div>
                  <div className="btn">save 40%</div>
                </div>
              </a>
            </li>
            <li
              className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 border-2 rounded-3xl ${
                openTab === 3 ? "border-2 border-yellow-500" : ""
              }`}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  shadow-lg rounded leading-normal  h-40 flex flex-col justify-between"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div>
                  <h3 className="text-yellow-500">Best value</h3>
                  <h1 className="text-2xl">6 Months</h1>
                </div>
                <div className="flex justify-between items-center">
                  <div>€5.99/wk</div>
                  <div className="btn">save 70%</div>
                </div>
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col p-2 min-w-0 break-words  bg-white dark:bg-gray-800 border-2 rounded-3xl w-full  shadow-lg ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "flex justify-between" : "hidden"}
                  id="link1"
                >
                  <div className="flex">
                    <div className="text-yellow-500">
                      <IoIceCreamSharp size={50} className="text-yellow-500" />
                    </div>
                    <div>
                      <div className="dark:text-gray-200 text-3xl">1week</div>
                      <p className="dark:text-gray-100 text-xl">19€/week</p>
                    </div>
                  </div>
                  <Link to="/payment">
                    <div className="btn text-base rounded-full px-9 py-3 bg-gradient-to-r from-yellow-200 to-yellow-600 ">
                      Continue
                    </div>
                  </Link>
                </div>
                <div
                  className={openTab === 2 ? "flex justify-between" : "hidden"}
                  id="link2"
                >
                  <div className="flex">
                    <div className="text-yellow-500">
                      <IoIceCreamSharp size={50} />
                    </div>
                    <div>
                      <div className="dark:text-gray-200 text-3xl">1month</div>
                      <p className="dark:text-gray-100 text-xl">15€/week</p>
                    </div>
                  </div>
                  <Link to="/payment">
                    <div className="btn text-base rounded-full px-9 py-3 bg-gradient-to-r from-yellow-200 to-yellow-600 ">
                      Continue
                    </div>
                  </Link>
                </div>
                <div
                  className={
                    openTab === 3
                      ? "flex justify-between items-center"
                      : "hidden"
                  }
                  id="link3"
                >
                  <div className="flex">
                    <div className="text-yellow-500">
                      <IoIceCreamSharp size={50} />
                    </div>
                    <div>
                      <div className="dark:text-gray-200 text-3xl">6months</div>
                      <p className="dark:text-gray-100 text-xl">10€/week</p>
                    </div>
                  </div>
                  <Link to="/payment">
                    <div className="btn text-base rounded-full px-9 py-3 bg-gradient-to-r from-yellow-200 to-yellow-600 ">
                      Continue
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumGold;
