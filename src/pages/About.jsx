import React from 'react'

const About = () => {
  return (
    <div className="w-full h-full min-h-[60vh] flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-purple-100 animate-fadeIn">
      <h2 className="text-7xl font-extrabold text-blue-700 mb-8 tracking-wide drop-shadow animate-bounce">About Expense Tracker</h2>
      <p className="text-3xl text-gray-700 mb-10 max-w-4xl text-justify font-light animate-fadeIn delay-200">
        <span role="img" aria-label="wallet">💸</span> Welcome to your personal Expense Tracker! This app empowers you to take control of your finances with a modern, easy-to-use interface. Effortlessly add, view, and manage your transactions, and always stay on top of your budget.
      </p>
      <div className="mb-12 text-2xl text-gray-800 space-y-6 max-w-2xl animate-fadeIn delay-300">
        <div className="hover:scale-105 transition-transform duration-300 flex items-center gap-2"><span role="img" aria-label="plus">➕</span> Add income and expenses instantly</div>
        <div className="hover:scale-105 transition-transform duration-300 flex items-center gap-2"><span role="img" aria-label="chart">📊</span> Visualize your balance at a glance</div>
        <div className="hover:scale-105 transition-transform duration-300 flex items-center gap-2"><span role="img" aria-label="lock">🔒</span> Secure registration and login</div>
        <div className="hover:scale-105 transition-transform duration-300 flex items-center gap-2"><span role="img" aria-label="mobile">📱</span> Responsive design for all devices</div>
      </div>
      <div className="text-center mt-8 animate-fadeIn delay-500">
        <span className="text-3xl text-blue-600 font-semibold italic">
          Start tracking, stay in control, and achieve your financial goals!
        </span>
      </div>
    </div>
  )
}

export default About