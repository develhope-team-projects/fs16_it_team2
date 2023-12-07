import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const Login = () => {
  const {
    user,
    loginUserInfo,
    updateLoginUserInfo,
    loginUserOnSubmit,
    loginError,
    isLoginLoading,
  } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-blue-800 via-purple-700 to-fuchsia-600">
      <div className="flex flex-col gap-5 p-5 items-center justify-center border-3 custom-box-shadow rounded-2xl bg-gradient-to-t from-blue-600 via-purple-300 to-fuchsia-200 text-gray-800 w-4/5 md:w-2/4">
        <div className="flex items-center">
          <span className="hover:text-[#e058cc] p-2 text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
          <h2 className="mb-2 text-3xl">Login</h2>
          <span className="hover:text-[#e058cc] p-2 text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
        </div>

        <form
          onSubmit={loginUserOnSubmit}
          className="py-3 border-b-2 border-white"
        >
          {/* EMAIL */}
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-60 md:w-96 rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your email"
              type="email"
              id="emailLog"
              onChange={(e) =>
                updateLoginUserInfo({ ...loginUserInfo, email: e.target.value })
              }
              value={loginUserInfo.email}
            />
          </div>

          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-60 md:w-96 rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your password"
              type="password"
              id="passwordLog"
              onChange={(e) =>
                updateLoginUserInfo({
                  ...loginUserInfo,
                  password: e.target.value,
                })
              }
              value={loginUserInfo.password}
            />
          </div>

          <div className="flex gap-1 p-3">
            <input type="checkbox" id="checkbox" />
            <label className="gap-3 mr-3" htmlFor="checkbox">
              Check to remember me!
            </label>
            <button className="px-4 ml-4 text-white transition-colors duration-300 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:text-blue-300 hover:text-xl hover:text-blue-300 bg-gradient-to-l from-gray-700 via-gray-500 to-gray-700">
              Forgot password?
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="p-3 px-20 mt-4 mb-4 text-xl text-white bg-purple-500 border-2 border-white rounded-full shadow-xl w-60 md:w-96hover:text-2xl"
              type="submit"
              disabled={isLoginLoading}
            >
              {isLoginLoading ? "Getting you in.." : "Login"}
            </button>
          </div>

          {loginError?.error && (
            <div className="flex flex-col items-center p-4 border-2 border-white bg-fuchsia-500 rounded-xl text-black-700">
              <b className="text-xl font-bold">{`Error status code: ${loginError?.status}`}</b>
              <p className="text-lg">{loginError?.message}</p>
            </div>
          )}
        </form>

        <div className="text-gray-800">
          <p>or login with:</p>
        </div>
        <div className="flex items-center justify center flex-wrap md:flex-row gap-2 p-3">
          <button className="p-2 px-5 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl hover:text-xl">
            Google
          </button>
          <button className="p-2 px-5 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl hover:text-xl">
            Facebook
          </button>
          <button className="p-2 px-5 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl hover:text-xl ">
            Tinder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
