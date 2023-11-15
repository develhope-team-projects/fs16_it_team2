import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-purple-700">
      <div className="sm:(small) flex flex-col gap-5 p-5 items-center justify-center border-3 custom-box-shadow rounded-2xl bg-purple-200 text-gray-800 w-2/4">
        <h2 className="mb-2 text-3xl">Login</h2>
        <form className="py-3 border-b-2 border-white">
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl"
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
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl"
              placeholder="enter your password"
              type="password"
              id="passwordLog"
            />
          </div>
          <div className="m-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"> Check to remember me!</label>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/app/">
              <button className="p-2 px-16 mb-6 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl">
                Login
              </button>
            </Link>
          </div>
        </form>
        <div className="text-gray-800">
          <p>or login with:</p>
        </div>
        <div className="flex gap-2 p-3">
          <button className="p-2 px-5 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl">
            Google
          </button>
          <button className="p-2 px-5 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl">
            Facebook
          </button>
          <button className="p-2 px-5 text-white bg-purple-500 border-2 border-white rounded-full shadow-xl ">
            Tinder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
