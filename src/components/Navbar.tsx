import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-blue-500 text-white">
      <div className="flex space-x-4">
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/product" className="hover:underline">My Cart</Link>
        <Link to="/" className="hover:underline">Home</Link>
      </div>
      <div>
        <img src="/path/to/logo.png" alt="Logo" className="h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
