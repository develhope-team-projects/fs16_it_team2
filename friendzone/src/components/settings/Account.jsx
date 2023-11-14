import React, { useState, useEffect } from "react";
import TimeZoneChanger from "./TimeZoneChanger";
import DeleteAccountModal from "./DeleteAccountModal";
import icecream from "../../assets/images/icecreams/glasses.png";

const Account = () => {
  const getStoredValue = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  };

  const setStoredValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [firstName, setFirstName] = useState(
    getStoredValue("firstName", "Monica")
  );
  const [lastName, setLastName] = useState(
    getStoredValue("lastName", "Lucaci")
  );
  const [username, setUsername] = useState(
    getStoredValue("username", "Monica_Lucaci")
  );
  const [timezone, setTimezone] = useState(
    getStoredValue("timezone", "europe/rome")
  );

  const [successMessage, setSuccessMessage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // Save values to localStorage whenever they change
    setStoredValue("firstName", firstName);
    setStoredValue("lastName", lastName);
    setStoredValue("username", username);
    setStoredValue("timezone", timezone);
  }, [firstName, lastName, username, timezone]);

  const handleFieldChange = (event, setField) => {
    setField(event.target.value);
    setSuccessMessage(""); // Clear success message when a field is changed
  };

  const handleSaveData = (field, newValue, setField) => {
    console.log(`${field} saved: ${newValue}`);
    if (setField) {
      setField(newValue);
    }
    setSuccessMessage(`${field} saved successfully!`);
  };

  const handleTimezoneChange = (newTimezone) => {
    setTimezone(newTimezone);
    setSuccessMessage("Timezone saved successfully!");
  };

  const handleSaveAllChanges = () => {
    console.log("All changes saved!");
    setSuccessMessage("All changes saved successfully!");
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = () => {
    // Add logic to delete the account
    console.log("Account deleted!");
    // Redirect to the landing page (replace this with your routing logic)
    window.location.href = "/landing";
  };

  return (
    <div className="flex justify-between gap-4 dark:bg-black gray-text">
      <div className="w-full p-2  gray-text">
        <h2 className="mb-6 text-2xl font-bold dark:bg-transparent dark:text-gray-400">
          Account Settings
        </h2>
        <div className="flex justify-between gap-8 mb-4 ">
          <div className="mb-4 max-w-52">
            <label className="block mb-2 text-sm font-bold text-gray-700 align-middle dark:text-gray-500">
              First Name:
            </label>
            <div className="flex">
              <input
                type="text"
                value={firstName}
                onChange={(event) => handleFieldChange(event, setFirstName)}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
          <div className="mb-4 max-w-52">
            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-500">
              Last Name:
            </label>
            <div className="flex">
              <input
                type="text"
                value={lastName}
                onChange={(event) => handleFieldChange(event, setLastName)}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-500">
            Username:
          </label>
          <div className="flex">
            <input
              type="text"
              value={username}
              onChange={(event) => handleFieldChange(event, setUsername)}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>

        <TimeZoneChanger
          timezone={timezone}
          onTimezoneChange={handleTimezoneChange}
        />
        <div className="flex mt-4 dark:bg-black dark:text-gray-500 flex-end">
          {successMessage && (
            <p className="mb-2 text-green-500">{successMessage}</p>
          )}
          <button
            onClick={handleSaveAllChanges}
            className="px-4 py-2 text-white bg-purple-500 rounded-md  hover:bg-green-600 focus:outline-none"
          >
            Save All Changes
          </button>
        </div>
        <h2 className="mt-4 mb-4 text-2xl font-bold dark:text-gray-400">
          Delete Account
        </h2>
        <div className="flex gap-5 mt-4">
          <div className="flex items-center justify-start">
            <h2 className="dark:text-gray-500">Delete account:</h2>
          </div>
          <button
            onClick={handleDeleteAccount}
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Delete Account
          </button>
        </div>

        {showDeleteModal && (
          <DeleteAccountModal
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>

      <div className="relative flex items-center justify-center w-full">
      <img src={icecream} className="p-4 w-96 custom-bounce" />
        <span className="content__badges_circle circle-1"></span>
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

export default Account;
