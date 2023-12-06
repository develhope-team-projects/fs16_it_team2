import React, { useState } from "react";
import { Link } from "react-router-dom";

const PasswordComponent = ({ updateRegisterUserInfo, registerUserInfo }) => {
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

  return (
    <div className="py-3 border-white border-b-3">
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-xl" htmlFor="password">
          Password
        </label>

        <div className="relative">
          <input
            className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
            placeholder="enter your password"
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={(e) =>
              updateRegisterUserInfo({
                ...registerUserInfo,
                password: e.target.value,
              })
            }
            value={registerUserInfo.password}
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
          Repeat Password
        </label>
        <div style={{ position: "relative" }}>
          <input
            className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl ::placeholder-gray-500 focus:placeholder-purple-700"
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
    </div>
  );
};

export default PasswordComponent;
