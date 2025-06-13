import React from 'react'
import { DollarSign } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <DollarSign className="w-8 h-8" />
            Expense Tracker
          </h1>
          <nav className="hidden md:flex space-x-6">
            <button className="hover:text-blue-200 transition-colors">Dashboard</button>
            <button className="hover:text-blue-200 transition-colors">Reports</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header
