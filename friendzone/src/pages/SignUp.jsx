import PasswordComponent from "../components/PasswordComponent";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-purple-700">
      <div className="flex flex-col gap-5 p-5 items-center justify-center border-3 shadow-lg rounded-2xl bg-purple-200 text-gray-800 w-2/4">
        <h2 className="text-3xl mb-2">Join to Friendzone</h2>
        <form className="border-b-3 py-3 border-white">
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="name">
              {" "}
              Full Name
            </label>
            <input
              className="w-80 border-2 p-2 bg-transparent border-white rounded-xl shadow-lg"
              placeholder="enter your name"
              type="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="username">
              {" "}
              Username
            </label>
            <input
              className="w-80 border-2 p-2 bg-transparent border-white rounded-xl shadow-lg"
              placeholder="enter your username"
              type="username"
              id="username"
            />
          </div>
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
          <div >
            <PasswordComponent />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
