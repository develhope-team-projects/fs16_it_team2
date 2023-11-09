import React, { useState, useEffect } from "react";
import PremiumPlus from "../../pages-sidebar/PremiumPlus";
import PremiumGold from "../../pages-sidebar/PremiumGold";
import PremiumPlatinum from "../../pages-sidebar/PremiumPlatinum";

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

  return (
    <div className="dark:bg-black">
      <div className="w-full m-auto">
        <ul className="flex  mb-0 list-none pt-3 pb-4 flex-row" role="tablist">
          {tabComponents.map((tab, index) => (
            <li
              key={index}
              className={`-mb-px mr-2 last:mr-0 flex-auto text-center text-gray-500 hover:border-2 rounded-xl ${
                openTab === index ? "border-2 border-purple-500 rounded-xl" : ""
              }`}
            >
              <a
                className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal flex"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(index);
                }}
                role="tablist"
              >
                <div>
                  <h3 className="text-xs">{tab.label}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative break-words bg-white w-full mb-6 ">
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
    </div>
  );
};

export default Plan;
