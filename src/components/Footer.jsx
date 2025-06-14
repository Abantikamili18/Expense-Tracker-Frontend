import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 w-full flex-shrink-0">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">© {currentYear} Expense Tracker App. All rights reserved.</p>
          <p className="text-xs">Built with ❤️ by Dreamer Sunless</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer