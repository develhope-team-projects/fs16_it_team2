import { useEffect } from "react";
import { createContext, useCallback, useState } from "react";
import { baseUrl, postRequest } from "../utils/service";

// CREATE CONTEXT TO SHARE AUTHENTICATION STATE ACROSS THE APPLICATION.
export const AuthContext = createContext();

// AUTHENTICATION CONTEXT PROVIDER COMPONENT FOR USER MANAGEMENT AND SESSION.
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // STATES FOR USER REGISTRATION PROCESS.
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerUserInfo, setRegisterUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  // STATES FOR USER LOGIN PROCESS.
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginUserInfo, setLoginUserInfo] = useState({
    email: "",
    password: "",
  });

  // RETRIEVE USER INFO FROM LOCAL STORAGE ON COMPONENT MOUNT.
  useEffect(() => {
    const retrievedUser = localStorage.getItem("User");

    setCurrentUser(JSON.parse(retrievedUser));
  }, []);

  // FUNCTION TO REGISTER USER AND HANDLE RESPONSE.
  const registerUserOnSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerUserInfo));

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setCurrentUser(response);
    },
    [registerUserInfo]
  );

  // UPDATE REGISTRATION INFO DURING REGISTRATION PROCESS.
  const updateRegisterUserInfo = useCallback((userInfo) => {
    setRegisterUserInfo(userInfo);
  }, []);

  // FUNCTION TO LOGIN USER AND HANDLE RESPONSE.
  const loginUserOnSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginUserInfo));

      setIsLoginLoading(false);

      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem("User", JSON.stringify(response));
      setCurrentUser(response);
    },
    [loginUserInfo]
  );

  // UPDATE LOGIN INFO DURING LOGIN PROCESS.
  const updateLoginUserInfo = useCallback((userInfo) => {
    setLoginUserInfo(userInfo);
  }, []);

  // FUNCTION TO LOG OUT USER AND REMOVE USER INFO FROM LOCAL STORAGE.
  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setCurrentUser(null);
  }, []);

  // PROVIDE CONTEXT VALUES TO CHILD COMPONENTS.
  return (
    <AuthContext.Provider
      value={{
        // CURRENT USER
        user: currentUser,
        // REGISTRATION
        registerUserOnSubmit,
        registerUserInfo,
        updateRegisterUserInfo,
        registerError,
        isRegisterLoading,
        // LOGIN
        loginUserOnSubmit,
        loginUserInfo,
        updateLoginUserInfo,
        loginError,
        isLoginLoading,
        // LOGOUT
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// INSERIRE SOLO I COMPONENTI CHE SERVONO A TUTTO IL SITO, SPOSTARE LOGIN, REGISTER NELLE PAGINE RELATIVE
// OPPURE INSERIRLI IN DEI HOOK CUSTOM (LOGIN, REGISTER, LOGOUT)
