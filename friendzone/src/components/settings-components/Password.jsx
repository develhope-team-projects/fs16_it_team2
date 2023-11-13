import React, { useState } from "react";
import icecream from "../../assets/images/icecreams/happy.png";

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = () => {
    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    // TODO: Add logic to send a request to change the password
    // For example, you can use an API call to update the password on the server

    // Clear form and reset error state
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div className="dark:bg-black gray-text flex gap-4 justify-between ">
      <div className=" w-full p-2">
        <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-200">
          Change Password
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-400"
          >
            Current Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            className="mt-1  p-2 w-full rounded-md border focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-400"
          >
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-400"
          >
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button
          onClick={handlePasswordChange}
          className="bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer focus:outline-none hover:bg-purple-700"
        >
          Change Password
        </button>
      </div>
      <div className="flex items-center w-full justify-center relative">
        <img src={icecream} className="w-96 p-4 custom-bounce" />
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

export default Password;
