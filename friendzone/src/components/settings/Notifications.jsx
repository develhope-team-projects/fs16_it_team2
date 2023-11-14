import React, { useState } from "react";
import icecream from "../../assets/images/icecreams/2icecrm.png";

const NotificationSettings = () => {
  const notificationSettings = [
    { key: "matchNotifications", label: "Match Notifications" },
    { key: "messageNotifications", label: "Message Notifications" },
    {
      key: "profileActivityNotifications",
      label: "Profile Activity Notifications",
    },
    { key: "eventNotifications", label: "Event Notifications" },
    { key: "compatibilityNotifications", label: "Compatibility Notifications" },
    { key: "dailyMatchesNotifications", label: "Daily Matches Notifications" },
    { key: "appUpdateNotifications", label: "App Update Notifications" },
    { key: "securityNotifications", label: "Security Notifications" },
    { key: "feedbackNotifications", label: "Feedback Notifications" },
    { key: "specialOfferNotifications", label: "Special Offer Notifications" },
  ];

  // Load saved settings from local storage
  const savedSettings =
    JSON.parse(localStorage.getItem("notificationSettings")) || {};

  const [notificationState, setNotificationState] = useState(() => {
    // Initialize state with saved settings or default to false
    const initialState = Object.fromEntries(
      notificationSettings.map((setting) => [
        setting.key,
        savedSettings[setting.key] || false,
      ])
    );
    return initialState;
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleToggle = (key) => {
    setNotificationState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleSave = () => {
    // Implement logic to save the notification settings (e.g., API call)

    // Save settings to local storage
    localStorage.setItem(
      "notificationSettings",
      JSON.stringify(notificationState)
    );

    // Display a success message
    setShowSuccessMessage(true);

    // Reset the success message after a delay
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div className="flex justify-between gap-4 dark:bg-black gray-text ">
      <div className="w-2/4 p-2  gray-text">
        <h2 className="mb-4 text-xl font-semibold">Notification Settings</h2>

        {notificationSettings.map((setting) => (
          <div key={setting.key} className="mb-4">
            <label className="flex items-center text-sm font-medium text-gray-600 ">
              {setting.label}
              <input
                type="checkbox"
                checked={notificationState[setting.key]}
                onChange={() => handleToggle(setting.key)}
                className="ml-2"
              />
            </label>
          </div>
        ))}

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="px-4 py-2 text-white bg-purple-500 rounded-md cursor-pointer"
        >
          Save Settings
        </button>

        {/* Success Message */}
        {showSuccessMessage && (
          <p className="mt-4 text-green-500">
            Notification settings saved successfully!
          </p>
        )}
      </div>
      <div className="relative flex items-center justify-center w-full">
        <img src={icecream} className="p-4 w-96 custom-bounce" />
        <span className=" circle-1"></span>
        <span className="content__badges_circle circle-2"></span>
        <span className="content__badges_circle circle-3"></span>
        <span className="content__badges_circle circle-4"></span>
        <span className="content__badges_circle circle-5"></span>
        <span className="content__badges_circle circle-6"></span>
        <span className="content__badges_circle circle-7"></span>
        <span className="content__badges_circle circle-8"></span>
        <span className="content__badges_circle circle-9"></span>
        <span className="content__badges_circle circle-10"></span>
        <span className="content__badges_circle circle-11"></span>
        <span className="content__badges_circle circle-12"></span>
        <span className="content__badges_circle circle-13"></span>
        <span className="content__badges_circle circle-14"></span>
        <span className="content__badges_circle circle-15"></span>
        <span className="circle-16"></span>
        <span className="circle-17"></span>
        <span className="circle-18"></span>
        <span className="circle-19"></span>
      </div>
    </div>
  );
};

export default NotificationSettings;
