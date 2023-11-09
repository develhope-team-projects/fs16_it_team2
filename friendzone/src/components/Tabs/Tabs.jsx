import React from "react";
import { useState } from "react";
import img from "../gelato.png";
import { IoIceCreamSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Tabs = ({ type, price, title }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap gap-7">
        <div className="w-4/5 m-auto  ">
          <div className="bg-gradient-to-t from-white to-yellow-400 flex flex-col gap-5 mb-5">
            <div className="flex items-center justify-center">
              <h3 className="text-5xl">FRIENDZONE GOLD</h3>
            </div>
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-5xl">
                see who likes you with Friendzone Gold
              </h2>
              <h2 className="text-3xl">
                Your new friends are waiting for you{" "}
              </h2>
              <h4>Select a Plan</h4>
            </div>
          </div>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 hover:border-2 ${
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
                  <h3>Popular</h3>
                  <h1>1 week</h1>
                </div>
                <div>20.00/wk</div>
              </a>
            </li>
            <li
              className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 hover:border-2 ${
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
                1 Month{" "}
                <div className="flex justify-between items-center">
                  <div>€10.99/wk</div>
                  <div className="btn">save 40%</div>
                </div>
              </a>
            </li>
            <li
              className={`-mb-px mr-2 w-52 last:mr-0 flex-auto text-center text-gray-500 hover:border-2 ${
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
                <h3>Best value</h3>
                <h1>6 Months</h1>
                </div>
                <div className="flex justify-between items-center">
                  <div>€5.99/wk</div>
                  <div className="btn">save 70%</div>
                </div>
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "flex justify-between" : "hidden"}
                  id="link1"
                >
                  <div className="flex">
                    <div>
                      <IoIceCreamSharp size={50} />
                    </div>
                    <div>
                      <div>1week</div>
                      <p>19</p>
                    </div>
                  </div>
                  <Link to="/payment">
                    <div className="btn">Continue</div>
                  </Link>
                </div>
                <div
                  className={openTab === 2 ? "flex justify-between" : "hidden"}
                  id="link2"
                >
                  <div className="flex">
                    <div>
                      <IoIceCreamSharp size={50} />
                    </div>
                    <div>
                      <div>1week</div>
                      <p>14</p>
                    </div>
                  </div>
                  <Link to="/payment">
                    <div className="btn">Continue</div>
                  </Link>
                </div>
                <div
                  className={openTab === 3 ? "flex justify-between" : "hidden"}
                  id="link3"
                >
                  <div className="flex">
                    <div>
                      <IoIceCreamSharp size={50} />
                    </div>
                    <div>
                      <div>1week</div>
                      <p>11</p>
                    </div>
                  </div>
                  <Link to="/payment">
                    <div className="btn">Continue</div>
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

export default Tabs;
