import React, { useState, useEffect } from "react";
import TimeZoneChanger from "./TimeZoneChanger";
import DeleteAccountModal from "./DeleteAccountModal";

const MyDetails = () => {
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
    <div className="dark:bg-black">
      <h2 className="dark:bg-transparent dark:text-gray-400 text-2xl font-bold mb-6">
        Account Settings
      </h2>
      <div className="mb-4 flex gap-8">
        <div className="mb-4">
          <label className="block align-middle text-gray-700  dark:text-gray-500  text-sm font-bold mb-2">
            First Name:
          </label>
          <div className="flex">
            <input
              type="text"
              value={firstName}
              onChange={(event) => handleFieldChange(event, setFirstName)}
              className="dark:bg-transparent dark:text-gray-400 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-500  text-sm font-bold mb-2">
            Last Name:
          </label>
          <div className="flex">
            <input
              type="text"
              value={lastName}
              onChange={(event) => handleFieldChange(event, setLastName)}
              className="dark:bg-transparent dark:text-gray-400 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-500 text-sm font-bold mb-2">
          Username:
        </label>
        <div className="flex">
          <input
            type="text"
            value={username}
            onChange={(event) => handleFieldChange(event, setUsername)}
            className="dark:bg-transparent dark:text-gray-400 w-full px-3 h-11 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <TimeZoneChanger
        timezone={timezone}
        onTimezoneChange={handleTimezoneChange}
      />
      <div className="dark:bg-black dark:text-gray-500 mt-4 flex flex-end">
        {successMessage && (
          <p className="text-green-500 mb-2">{successMessage}</p>
        )}
        <button
          onClick={handleSaveAllChanges}
          className=" bg-purple-500  text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Save All Changes
        </button>
      </div>
      <h2 className="dark:text-gray-400 text-2xl font-bold mb-4 mt-4">
        Delete Account
      </h2>
      <div className="mt-4 flex gap-5">
        <div className="flex  items-center justify-start">
          <h2 className="dark:text-gray-500">Delete account:</h2>
        </div>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
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
  );
};

export default MyDetails;
