import React from "react";

const DeleteAccountModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white p-4 rounded-md z-10">
        <p className="mb-4">Are you sure you want to delete your account?</p>
        <div className="flex justify-center">
          <button
            onClick={onCancel}
            className="mr-2 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
