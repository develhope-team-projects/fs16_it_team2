import React, { useState, useEffect } from "react";
import PremiumPlus from "../../pages/sidebar/PremiumPlus";
import PremiumGold from "../../pages/sidebar/PremiumGold";
import PremiumPlatinum from "../../pages/sidebar/PremiumPlatinum";
import { IoIceCreamSharp } from "react-icons/io5";

const tabComponents = [
  { component: PremiumPlus, label: "Plus" },
  { component: PremiumGold, label: "Gold" },
  { component: PremiumPlatinum, label: "Platinum" },
];

const Plan = () => {
  const [openTab, setOpenTab] = useState(1);

  useEffect(() => {
    // Retrieve the selected tab index from localStorage on component mount
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab !== null) {
      setOpenTab(parseInt(storedTab, 10));
    } else {
      // If no tab is stored in localStorage, set the default to PremiumGold (index 1)
      setOpenTab(1);
      localStorage.setItem("selectedTab", "1");
    }
  }, []);

  const handleTabChange = (index) => {
    // Store the selected tab index in localStorage
    localStorage.setItem("selectedTab", index.toString());
    setOpenTab(index);
  };

  const getIceCreamColor = (label) => {
    switch (label) {
      case "Plus":
        return "text-pink-500";
      case "Gold":
        return "text-yellow-500";
      case "Platinum":
        return "text-zinc-500"; // Update with the actual color class you want
      default:
        return "";
    }
  };

  return (
    <div className="flex lg:flex-row flex-col  dark:bg-black">
      {/* Vertical Navigation Bar on the Left */}
      <div className="flex lg:flex-col items-center justify-center mt-1 lg:w-16 bg-transparent">
        {tabComponents.map((tab, index) => (
          <div
            key={index}
            className=" p-3 cursor-pointer group"
            onClick={() => handleTabChange(index)}
          >
            <IoIceCreamSharp
              size={31}
              className={` ${
                openTab === index
                  ? "bg-transparent custom-box-shadow rounded-full"
                  : ""
              } ${getIceCreamColor(tab.label)}`}
            />
            <h2 className="absolute left-0 hidden px-2 py-1 font-semibold text-gray-900 whitespace-pre bg-white rounded-md drop-shadow-lg w-fit group-hover:block">
              {tab.label}
            </h2>
          </div>
        ))}
      </div>

      {/* Content Area on the Right */}
      <div className="relative flex-1 w-full mb-6 break-words bg-transparent items-center  justify-center">
        <div className="flex-auto px-4 py-5">
          <div className="tab-content tab-space">
            {tabComponents.map((tab, index) => (
              <div
                key={index}
                className={
                  openTab === index ? "flex justify-between" : "hidden"
                }
              >
                <div className="flex  lg:w-4/5 ">
                  <tab.component />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
