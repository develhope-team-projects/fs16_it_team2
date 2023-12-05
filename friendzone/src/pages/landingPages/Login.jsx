import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-t from-blue-800 via-purple-700 to-fuchsia-600">
      <div className="sm:(small) flex flex-col gap-5 p-5 items-center justify-center border-3 custom-box-shadow rounded-2xl bg-gradient-to-t from-blue-600 via-purple-300 to-fuchsia-200 text-gray-800 w-2/4">
        <div className="flex items-center">
          <span className="hover:text-[#e058cc] p-2 text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
          <h2 className="mb-2 text-3xl">Login</h2>
          <span className="hover:text-[#e058cc] p-2 text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
        </div>
        <form className="py-3 border-b-2 border-white">
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-96 rounded-xl placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your email"
              type="email"
              id="emailLog"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-96 rounded-xl  placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your password"
              type="password"
              id="passwordLog"
            />
          </div>
          <div className="flex p-3 gap-1">
            <input type="checkbox" id="checkbox" />
            <label className="gap-3 mr-3" htmlFor="checkbox">
              Check to remember me!
            </label>
            <button className="ml-4 px-4 text-white focus:outline-none focus:ring-2 focus:text-blue-300 hover:text-xl hover:text-blue-300 transition-colors duration-300 bg-gradient-to-l from-gray-700 via-gray-500 to-gray-700 rounded-full shadow-xl">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/app/">
              <button className="p-3 px-20 w-96 text-xl mt-4 mb-4 hover:text-2xl text-white bg-purple-500 border-2 border-white rounded-full shadow-xl">
                Login
              </button>
            </Link>
          </div>
        </form>
        <div className="text-gray-800">
          <p>or login with:</p>
        </div>
        <div className="flex gap-2 p-3">
          <button className="p-2 px-5 text-white hover:text-xl bg-purple-500 border-2 border-white rounded-full shadow-xl">
            Google
          </button>
          <button className="p-2 px-5 text-white hover:text-xl bg-purple-500 border-2 border-white rounded-full shadow-xl">
            Facebook
          </button>
          <button className="p-2 px-5 text-white hover:text-xl bg-purple-500 border-2 border-white rounded-full shadow-xl ">
            Tinder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
