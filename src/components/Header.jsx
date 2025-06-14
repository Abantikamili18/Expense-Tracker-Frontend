import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </nav>
        </header>
  );
};

export default Header;
