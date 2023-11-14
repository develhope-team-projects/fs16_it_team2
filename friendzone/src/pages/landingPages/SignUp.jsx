import PasswordComponent from "../../components/login/PasswordComponent";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-purple-700">
      <div className="sm: (small) flex flex-col gap-5 p-5 items-center justify-center border-3 shadow-lg rounded-2xl bg-purple-200 text-gray-800 w-2/4">
        <h2 className="mb-2 text-3xl">Join Friendzone</h2>
        <form className="py-3 border-white border-b-3">
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="name">
              {" "}
              Full Name
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl"
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
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl"
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
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl"
              placeholder="enter your email"
              type="email"
              id="email"
            />
          </div>
          <div>
            <PasswordComponent />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
