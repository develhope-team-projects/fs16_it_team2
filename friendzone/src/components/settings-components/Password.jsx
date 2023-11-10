import React, { useState } from "react";

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
    <div className="dark:bg-black gray-text">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label
          htmlFor="currentPassword"
          className="block text-sm font-medium text-gray-600"
        >
          Current Password:
        </label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Enter current password"
          className="mt-1 md:w-96 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-600"
        >
          New Password:
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-600"
        >
          Confirm New Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500"
        />
      </div>
      <button
        onClick={handlePasswordChange}
        className="bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer"
      >
        Change Password
      </button>
    </div>
  );
};

export default Password;
