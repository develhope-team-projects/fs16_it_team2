// IceCreamModal.js
import React from "react";
import Modal from "react-modal";
import match from "../../assets/images/icecreams/2icecrm.png";
import Confetti from "react-dom-confetti";
import { useEffect } from "react";
import { useState } from "react";

// Make sure to set the root element ID for react-modal
Modal.setAppElement("#root");

const IceCreamModal = ({ onClose }) => {
  const [confettiActive, setConfettiActive] = useState(false);
  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      zIndex: 1000, // Set a higher z-index
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none", // Set the background to none to make it transparent
      border: "none", // Remove the border
    },
  };
  useEffect(() => {
    // Activate confetti when the modal opens
    setConfettiActive(true);

    // Deactivate confetti after a delay (adjust the duration based on your preference)
    const confettiDeactivateTimeout = setTimeout(() => {
      setConfettiActive(false);
    }, 3000); // 3 seconds

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(confettiDeactivateTimeout);
  }, []);
  return (
    <Modal
      isOpen={true} // Set to true to open the modal
      onRequestClose={onClose}
      contentLabel="Ice Cream Modal"
      style={modalStyles} // Apply the custom styles
    >
      <div className="flex items-center justify-center p-8 bg-transparent w-4/5 relative animate-fadeIn">
        <img src={match} alt="Ice Cream Match" className="w-4/5" />
        <h2 className="text-9xl font-bold text-purple-500  text-shadow-xl absolute bottom-10">
          New friend!
        </h2>
        <Confetti active={confettiActive} />
      </div>
    </Modal>
  );
};

export default IceCreamModal;
