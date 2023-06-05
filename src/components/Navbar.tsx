import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../utils/AuthContext";

const Navbar: React.FC = () => {

  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleLogout = () => {
    // Call the logout function from the context
    logout();
  };

  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-blue-500 text-white">
      <div className="flex space-x-4">
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <Link to="/issued" className="hover:underline">
          My Book
        </Link>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
      <div>
        <img src="../assets/Logo.png" alt="Logo" className="h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
