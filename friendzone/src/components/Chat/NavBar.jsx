import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="flex w-screen h-16 mb-4 bg-gray-800 flex-lg-row">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <h2 className="text-2xl font-bold text-white">
          <Link to="/" className="text-white no-underline">
            Friendzone
          </Link>
        </h2>
        {user && (
          <span className="text-yellow-400">Logged in as {user.name}</span>
        )}
        <div className="flex space-x-3">
          {!user && (
            <>
              <Link to="/login" className="text-white no-underline">
                Login
              </Link>
              <Link to="/register" className="text-white no-underline">
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <Link
                onClick={() => logoutUser()}
                to="/login"
                className="text-white no-underline"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
