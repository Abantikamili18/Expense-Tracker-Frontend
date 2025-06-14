import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h3m8 0h3" />
          </svg>
          <span className="font-semibold">Expense Tracker App</span>
        </div>
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
          </nav>
        </header>
  );
};

export default Header;
