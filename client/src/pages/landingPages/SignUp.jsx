import PasswordComponent from "../../components/login/PasswordComponent";
import DateForm from "../../components/SignUp/DateForm";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const SignUp = () => {
  const {
    registerUserOnSubmit, // send post request with the user data
    registerUserInfo, // contains the user's info
    updateRegisterUserInfo, // updates the state with the user's info
    isRegisterLoading, // check if it is loading
    registerError, // check if there is an error
  } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-blue-800 via-purple-700 to-fuchsia-600">
      <div className="flex flex-col items-center justify-center w-4/5 md:w-2/4 md:gap-5 md:p-5 text-gray-800 sm:max-width: 640px border-3 custom-box-shadow rounded-2xl bg-gradient-to-t from-blue-600 via-purple-500 to-purple-400">
        <div className="flex items-center">
          <span className="hover:text-[#a22f91] p-2 text-xl md:text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
          <h2 className="md:mb-2 text-xl md:text-3xl">Join Friendzone</h2>
          <span className="hover:text-[#a22f91] p-2 text-xl md:text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
        </div>

        {/* FORM */}
        <form
          onSubmit={registerUserOnSubmit}
          className="md:py-3 border-white border-b-3"
        >
          {/*NAME */}
          <div className="flex flex-col gap-1 md:mb-3">
            <label className="md:text-xl" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-60   md:w-80  rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your name"
              type="text"
              id="name"
              onChange={(e) =>
                updateRegisterUserInfo({
                  ...registerUserInfo,
                  name: e.target.value,
                })
              }
              value={registerUserInfo.name}
            />
          </div>

          {/* SURNAME */}
          <div className="flex flex-col gap-1 md:mb-3">
            <label className="md:text-xl" htmlFor="surname">
              Surname
            </label>
            <input
              className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-60  md:w-80  rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your surname"
              type="text"
              id="surname"
              onChange={(e) =>
                updateRegisterUserInfo({
                  ...registerUserInfo,
                  surname: e.target.value,
                })
              }
              value={registerUserInfo.surname}
            />
          </div>

          {/* USERNAME */}
          <div className="flex flex-col gap-1 md:mb-3">
            <label className="md:text-xl" htmlFor="username">
              Username
            </label>
            <input
              className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-60  md:w-80  rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your username"
              type="text"
              id="username"
              onChange={(e) =>
                updateRegisterUserInfo({
                  ...registerUserInfo,
                  username: e.target.value,
                })
              }
              value={registerUserInfo.username}
            />
          </div>

          {/* DATE FORM */}
          <div>
            <DateForm />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1 md:mb-3">
            <label className="md:text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 placeholder-gray-700 bg-transparent border-2 border-white shadow-lg w-60  md:w-80  rounded-xl ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your email"
              type="email"
              id="email"
              onChange={(e) =>
                updateRegisterUserInfo({
                  ...registerUserInfo,
                  email: e.target.value,
                })
              }
              value={registerUserInfo.email}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <PasswordComponent
              updateRegisterUserInfo={updateRegisterUserInfo}
              registerUserInfo={registerUserInfo}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              className="p-3 px-16 mt-6 mb-6 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl w-60  md:w-80  hover:text-2xl"
              type="submit"
              disabled={isRegisterLoading}
            >
              {isRegisterLoading ? "Creating your account" : "SignUp!"}
            </button>

            {registerError?.error && (
              <div className="flex flex-col items-center p-4 border-2 border-white bg-fuchsia-500 rounded-xl text-black-700">
                <b className="md:text-xl font-bold">{`Error status code: ${registerError?.status}`}</b>
                <p className="text-lg">{registerError?.message}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
