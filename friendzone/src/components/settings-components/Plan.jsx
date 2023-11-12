import React, { useState, useEffect } from "react";
import PremiumPlus from "../../pages-sidebar/PremiumPlus";
import PremiumGold from "../../pages-sidebar/PremiumGold";
import PremiumPlatinum from "../../pages-sidebar/PremiumPlatinum";
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
    <div className="dark:bg-black flex">
      {/* Vertical Navigation Bar on the Left */}
      <div className="w-16 bg-transparent flex flex-col items-center justify-center">
        {tabComponents.map((tab, index) => (
          <div
            key={index}
            className="group cursor-pointer p-3 relative"
            onClick={() => handleTabChange(index)}
          >
            <IoIceCreamSharp
              size={31}
              className={` ${
                openTab === index ? "bg-transparent custom-box-shadow rounded-full" : ""
              } ${getIceCreamColor(tab.label)}`}
            />
            <h2 className="hidden absolute left-0 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-2 py-1 w-fit group-hover:block">
              {tab.label}
            </h2>
          </div>
        ))}
      </div>

      {/* Content Area on the Right */}
      <div className="flex-1 relative break-words bg-transparent w-full mb-6 ">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            {tabComponents.map((tab, index) => (
              <div
                key={index}
                className={
                  openTab === index ? "flex justify-between" : "hidden"
                }
              >
                <div className="flex">
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
