import "../../../index.css";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.jsx";

const Register = () => {
  const {
    registerUserOnSubmit, // send post request with the user data
    registerUserInfo, // contains the user's info
    updateRegisterUserInfo, // updates the state with the user's info
    isRegisterLoading, // check if it is loading
    registerError, // check if there is an error
  } = useContext(AuthContext);

  return (
    <form onSubmit={registerUserOnSubmit}>
      <div className="flex items-center justify-center h-screen pt-20">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Register</h2>

          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Name"
            onChange={(e) =>
              updateRegisterUserInfo({
                ...registerUserInfo,
                name: e.target.value,
              })
            }
            value={registerUserInfo.name}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Surname"
            onChange={(e) =>
              updateRegisterUserInfo({
                ...registerUserInfo,
                surname: e.target.value,
              })
            }
            value={registerUserInfo.surname}
          />

          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Username"
            onChange={(e) =>
              updateRegisterUserInfo({
                ...registerUserInfo,
                username: e.target.value,
              })
            }
            value={registerUserInfo.username}
          />

          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              updateRegisterUserInfo({
                ...registerUserInfo,
                email: e.target.value,
              })
            }
            value={registerUserInfo.email}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              updateRegisterUserInfo({
                ...registerUserInfo,
                password: e.target.value,
              })
            }
            value={registerUserInfo.password}
          />
          <button
            className={`w-full p-2 text-white rounded-md ${
              isRegisterLoading
                ? "bg-blue-300"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
            type="submit"
            disabled={isRegisterLoading}
          >
            {isRegisterLoading ? "Creating your account..." : "Register"}
          </button>

          {registerError?.error && (
            <div className="p-4 text-red-700 bg-red-200 border border-red-400 rounded-md">
              <b>{`Error status code: ${registerError?.status}`}</b>
              <p>{registerError?.message}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Register;
