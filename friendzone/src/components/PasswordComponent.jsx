import React, { useState } from "react";

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
    <div className="border-b-3 py-3 border-white">
      <div className="flex flex-col gap-1 mb-3">
        <label className="text-xl" htmlFor="password">
          {" "}
          Password
        </label>
        <div className="relative">
          <input
            className="w-80 border-2 p-2 bg-transparent border-white rounded-xl shadow-lg"
            placeholder="enter your password"
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span
            style={{
              position: "absolute",
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
            <p style={{ color: "red" }}>
              La password deve contenere almeno {minPasswordLength} caratteri
              con <br /> una lettera maiuscola, una lettera minuscola e un
              numero.
            </p>
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
            className="w-80 border-2 p-2 bg-transparent border-white rounded-xl shadow-lg"
            placeholder="repeat your password"
            type={showPassword ? "text" : "password"}
            id="repeatpassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <span
            style={{
              position: "absolute",
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
            <p style={{ color: "red" }}>
              La conferma della password non
              <br /> corrisponde alla password inserita.
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleSubmit}
          className="bg-purple-500 p-3 px-16 border-2 rounded-full border-white text-white shadow-xl mb-6 mt-6"
        >
          SignUp!
        </button>
      </div>
    </div>
  );
};

export default PasswordComponent;
