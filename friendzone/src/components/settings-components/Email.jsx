import React, { useState } from "react";
import icecream from "../../assets/images/icecreams/Designer.png";

const Email = () => {
  const [currentEmail, setCurrentEmail] = useState("user@example.com");
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [additionalEmail, setAdditionalEmail] = useState("");
  const [additionalEmails, setAdditionalEmails] = useState([]);
  const [defaultEmail, setDefaultEmail] = useState("");

  const handleChangeEmail = () => {
    // Basic validation
    if (!currentEmail || !newEmail || !confirmNewEmail) {
      setError("Please fill in all fields");
      return;
    }

    if (newEmail !== confirmNewEmail) {
      setError("New email and confirm email do not match");
      return;
    }

    // TODO: Add logic to send a request to change the email
    // For example, you can use an API call to update the email on the server

    // Clear form, reset error state, and show success message
    setCurrentEmail(newEmail);
    setNewEmail("");
    setConfirmNewEmail("");
    setError("");
    setSuccessMessage("Email successfully changed!");
  };

  const handleAddEmail = () => {
    // Basic validation
    if (!additionalEmail) {
      setError("Please enter an additional email");
      return;
    }

    // TODO: Add logic to send a request to add the additional email
    // For example, you can use an API call to save the additional email on the server

    // Clear form, reset error state, and add the additional email to the list
    setAdditionalEmails([...additionalEmails, additionalEmail]);
    setAdditionalEmail("");
    setError("");
  };

  const handleSetDefaultEmail = (email) => {
    // Find the index of the clicked email in the additionalEmails array
    const emailIndex = additionalEmails.indexOf(email);

    // Swap the default email with the clicked email
    setAdditionalEmails([
      ...additionalEmails.slice(0, emailIndex),
      defaultEmail || currentEmail,
      ...additionalEmails.slice(emailIndex + 1),
    ]);

    // Set the clicked email as the new default email
    setDefaultEmail(email);
  };

  const handleDeleteEmail = (email) => {
    // Filter out the clicked email from the additionalEmails array
    const updatedEmails = additionalEmails.filter((e) => e !== email);
    setAdditionalEmails(updatedEmails);
  };

  return (
    <div className="dark:bg-black gray-text flex gap-4 justify-between ">
      <div className=" gray-text w-full p-2">
        <h2 className="text-xl font-semibold mb-4">Email Settings</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <div className="mb-4">
          <p className="mb-2">Email: </p>
          <hr />
          <span className="mt-2">
            {defaultEmail || currentEmail}{" "}
            <span className=" rounded-full  px-2  text-purple-500">
              {" "}
              default
            </span>
          </span>
          <br />

          <ul className="list-disc list-inside mt-2">
            {additionalEmails.map((email, index) => (
              <li key={index} className="text-gray-700 list-none">
                {email}
                <button
                  onClick={() => handleSetDefaultEmail(email)}
                  className="ml-2  text-purple-500  rounded-2xl  px-2 underline"
                >
                  Set as Default
                </button>
                <button
                  onClick={() => handleDeleteEmail(email)}
                  className="ml-2 text-red-500 underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <label
            htmlFor="newEmail"
            className="block text-sm font-medium text-gray-400"
          >
            New Email:
          </label>
          <input
            type="email"
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter new email"
            className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmNewEmail"
            className="block text-sm font-medium text-gray-400"
          >
            Confirm New Email:
          </label>
          <input
            type="email"
            id="confirmNewEmail"
            value={confirmNewEmail}
            onChange={(e) => setConfirmNewEmail(e.target.value)}
            placeholder="Confirm new email"
            className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button
          onClick={handleChangeEmail}
          className="bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Change Email
        </button>

        <div className="mt-6 mb-4">
          <label
            htmlFor="additionalEmail"
            className="block text-sm font-medium text-gray-400"
          >
            Additional Email:
          </label>
          <input
            type="email"
            id="additionalEmail"
            value={additionalEmail}
            onChange={(e) => setAdditionalEmail(e.target.value)}
            placeholder="Enter additional email"
            className="mt-1 p-2 w-full rounded-md border focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button
          onClick={handleAddEmail}
          className="bg-purple-500 text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Add Email
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

export default Email;
