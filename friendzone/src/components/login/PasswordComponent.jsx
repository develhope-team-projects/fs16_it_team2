import React, { useState } from "react";
import { Link } from "react-router-dom";

const PasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [showMatchMessage, setShowMatchMessage] = useState(false);
  const [minPasswordLength, setMinPasswordLength] = useState(8);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setShowPasswordMessage(newPassword.length < minPasswordLength);
  };

  const handleConfirmPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    setShowMatchMessage(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Verifica se la password è stata inserita correttamente
    if (
      password.length < minPasswordLength ||
      !/[$&+,:;=?@#|'<>.^*()%!-]{8,}/gi
      // (?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(password)
    ) {
      setShowPasswordMessage(true);
      return;
    }

    // Verifica se la conferma della password corrisponde alla password
    if (password !== confirmPassword) {
      setShowMatchMessage(true);
      return;
    }
  };

  return (
    <div className="py-3 border-white border-b-3">
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-xl" htmlFor="password">
          {" "}
          Password
        </label>
        <div className="relative">
          <input
            className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-600"
            placeholder="enter your password"
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span
            style={{
              position: "static",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>

          {showPasswordMessage && (
            <div className="right-0 mt-2 text-red-950">
              La password deve contenere almeno {minPasswordLength} caratteri
              con <br /> una lettera maiuscola, una lettera minuscola e un
              numero.
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-xl" htmlFor="repeatpassword">
          {" "}
          Repeat Password
        </label>
        <div style={{ position: "relative" }}>
          <input
            className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-700"
            placeholder="repeat your password"
            type={showPassword ? "text" : "password"}
            id="repeatpassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <span
            style={{
              position: "static",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
          {showMatchMessage && (
            <div className="right-0 mt-2 text-red-950">
              La conferma della password non
              <br /> corrisponde alla password inserita.
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/login">
          <button
            onClick={handleSubmit}
            className="p-3 px-16 mt-6 mb-6 w-80 hover:text-2xl text-white bg-purple-500 border-2 border-white rounded-full shadow-xl"
          >
            SignUp!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordComponent;
