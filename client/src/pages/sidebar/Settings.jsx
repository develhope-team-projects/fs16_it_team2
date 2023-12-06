import React, { useState, useEffect } from "react";
import { MdManageAccounts, MdOutlineSwitchAccount } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCrown, FaRegCreditCard } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import Account from "../../components/settings/Account";
import Profile from "../../components/settings/Profile";
import Password from "../../components/settings/Password";
import Plan from "../../components/settings/Plan";
import Billing from "../../components/settings/Billing";
import Email from "../../components/settings/Email";
import Notifications from "../../components/settings/Notifications";

const tabComponents = [
  { component: Account, label: "Account", icon: <MdManageAccounts /> },
  { component: Profile, label: "Profile", icon: <MdOutlineSwitchAccount /> },
  { component: Password, label: "Password", icon: <RiLockPasswordLine /> },
  { component: Plan, label: "Plan", icon: <FaCrown /> },
  { component: Billing, label: "Billing", icon: <FaRegCreditCard /> },
  { component: Email, label: "Email", icon: <HiOutlineMail /> },
  {
    component: Notifications,
    label: "Notifications",
    icon: <IoNotificationsOutline />,
  },
];

const Settings = () => {
  const [openTab, setOpenTab] = useState(0);

  useEffect(() => {
    // Retrieve the selected tab index from localStorage on component mount
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setOpenTab(parseInt(storedTab, 10));
    }
  }, []);

  const handleTabChange = (index) => {
    // Store the selected tab index in localStorage
    localStorage.setItem("selectedTab", index.toString());
    setOpenTab(index);
  };

  return (
    <div className="">
      <div className="w-full m-auto dark:bg-black ">
        <ul
          className="mt-0 lg:mt-4 flex flex-row w-full pt-3 pb-4 mb-0 list-none dark:bg-black"
          role="tablist"
        >
          {tabComponents.map((tab, index) => (
            <li
              key={index}
              className={`-mb-px lg:mr-2 mr-0  last:mr-0 flex-auto dark:bg-black text-center text-gray-500 dark:text-gray-300 hover:border-2 rounded-xl ${
                openTab === index ? "border-2 border-purple-500 rounded-xl" : ""
              }`}
            >
              <a
                className="flex items-center justify-center lg:px-5 lg:py-3 px-2 py-2  text-xs font-bold  uppercase dark:bg-black custom-box-shadow rounded-xl"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(index);
                }}
                role="tablist"
              >
                <div className="flex items-center justify-center dark:bg-black">
                  {tab.icon && (
                    <span className=" text-xl  xs:text-base">
                      {tab.icon}
                    </span>
                  )}
                  <h3 className="hidden ml-2 text-xs lg:flex">{tab.label}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full mb-6 break-words bg-white dark:bg-black custom-box-shadow rounded-2xl">
          <div className="flex-auto px-5 py-3">
            <div className="tab-content tab-space">
              {tabComponents.map((tab, index) => (
                <div
                  key={index}
                  className={
                    openTab === index
                      ? tab.component === Plan
                        ? "flex justify-center"
                        : "block"
                      : "hidden"
                  }
                >
                  <div className="">
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

export default Settings;
