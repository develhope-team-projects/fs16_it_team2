import "../../../index.css";

import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.jsx";


const Login = () => {
  const {
    loginUserInfo,
    updateLoginUserInfo,
    loginUserOnSubmit,
    loginError,
    isLoginLoading,
  } = useContext(AuthContext);

  return (
    <form onSubmit={loginUserOnSubmit}>
      <div className="flex items-center justify-center h-screen pt-20">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Login</h2>

          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              updateLoginUserInfo({ ...loginUserInfo, email: e.target.value })
            }
            value={loginUserInfo.email}
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              updateLoginUserInfo({
                ...loginUserInfo,
                password: e.target.value,
              })
            }
            value={loginUserInfo.password}
          />
          <button
            className={`w-full p-2 text-white rounded-md ${
              isLoginLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-700"
            }`}
            type="submit"
            disabled={isLoginLoading}
          >
            {isLoginLoading ? "Getting you in..." : "Login"}
          </button>

          {loginError?.error && (
            <div className="p-4 text-red-700 bg-red-200 border border-red-400 rounded-md">
              <b>{`Error status code: ${loginError?.status}`}</b>
              <p>{loginError?.message}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
