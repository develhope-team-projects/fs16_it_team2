const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-purple-700">
      <div className="flex flex-col gap-5 p-5 items-center justify-center border-3 shadow-lg rounded-2xl bg-purple-200 text-gray-800 w-2/4">
        <h2 className="text-3xl mb-2">Log in to Friendzone</h2>
        <form className="border-b-2 py-3 border-white">
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="email">
              {" "}
              Email
            </label>
            <input
              className="w-80 border-2 p-2 bg-transparent border-white rounded-xl shadow-lg"
              placeholder="enter your email"
              type="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="password">
              {" "}
              Password
            </label>
            <input
              className="w-80 border-2 p-2 bg-transparent border-white rounded-xl shadow-lg"
              placeholder="enter your password"
              type="password"
              id="password"
            />
          </div>
          <div className="m-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"> Check to remember me!</label>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-purple-500 p-2 px-16 border-2 rounded-full border-white text-white shadow-xl mb-6">
              Login
            </button>
          </div>
        </form>
        <div className="flex gap-2 p-3">
          <button className="bg-purple-500 p-2 px-5 border-2 rounded-full border-white text-white shadow-xl">
            Google
          </button>
          <button className="bg-purple-500 p-2 px-5 border-2 rounded-full border-white text-white shadow-xl">
            Facebook
          </button>
          <button className="bg-purple-500 p-2 px-5 border-2 rounded-full border-white text-white shadow-xl ">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
