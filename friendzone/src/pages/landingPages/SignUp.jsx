import PasswordComponent from "../../components/login/PasswordComponent";
import DateForm from "../../components/SignUp/DateForm";

const SignUp = () => {
  return (
    <div className=" sm:max-width: 640px flex items-center justify-center w-full h-screen bg-gradient-to-t from-blue-800 via-purple-700 to-fuchsia-600">
      <div className="sm:max-width: 640px flex flex-col gap-5 p-5 items-center justify-center border-3 custom-box-shadow rounded-2xl bg-gradient-to-t from-blue-600 via-purple-500 to-purple-400 text-gray-800 w-2/4">
        <div className="flex items-center">
          <span className="hover:text-[#a22f91] p-2 text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
          <h2 className="mb-2 text-3xl">Join Friendzone</h2>
          <span className="hover:text-[#a22f91] p-2 text-2xl">
            <ion-icon name="ice-cream-outline"></ion-icon>
          </span>
        </div>
        <form className="py-3 border-white border-b-3">
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="name">
              Full Name
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your name"
              type="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="username">
              Username
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-600"
              placeholder="enter your username"
              type="username"
              id="username"
            />
          </div>
          <div>
            <DateForm />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 bg-transparent border-2 border-white shadow-lg w-80 rounded-xl placeholder-gray-700 ::placeholder-gray-500 focus:placeholder-purple-600"
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
