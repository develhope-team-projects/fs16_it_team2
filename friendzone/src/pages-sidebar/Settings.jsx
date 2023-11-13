import React, { useState, useEffect } from "react";
import { MdManageAccounts, MdOutlineSwitchAccount } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCrown, FaRegCreditCard } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrSettingsOption } from "react-icons/gr";
import Account from "../components/settings-components/Account";
import Profile from "../components/settings-components/Profile";
import Password from "../components/settings-components/Password";
import Plan from "../components/settings-components/Plan";
import Billing from "../components/settings-components/Billing";
import Email from "../components/settings-components/Email";
import Notifications from "../components/settings-components/Notifications";

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
    <div className=" ">
      <div className="w-full m-auto dark:bg-black ">
        <ul
          className="w-full flex mb-0 list-none pt-3 pb-4 flex-row dark:bg-black"
          role="tablist"
        >
          {tabComponents.map((tab, index) => (
            <li
              key={index}
              className={`-mb-px mr-2 last:mr-0 flex-auto dark:bg-black text-center text-gray-500 dark:text-gray-300 hover:border-2 rounded-xl ${
                openTab === index ? "border-2 border-purple-500 rounded-xl" : ""
              }`}
            >
              <a
                className="dark:bg-black text-xs font-bold uppercase px-5 py-3 custom-box-shadow rounded-xl leading-normal flex"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(index);
                }}
                role="tablist"
              >
                <div className="dark:bg-black flex items-center">
                  {tab.icon && (
                    <span className="mr-2 text-xl ">
                      {tab.icon}
                    </span>
                  )}
                  <h3 className="text-xs hidden lg:flex">{tab.label}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className=" dark:bg-black  break-words bg-white w-full mb-6 custom-box-shadow rounded-2xl">
          <div className="px-5 py-3 flex-auto">
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
