import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v9m-7-7h3m8 0h3" />
          </svg>
          <span className="font-semibold">Expense Tracker App</span>
        </div>
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <div className="text-xs text-gray-400 text-center md:text-right">
          © {currentYear} Expense Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer