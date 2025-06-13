import React from 'react'

const About = () => {
  return (
    <div className="w-full h-full min-h-[60vh] flex flex-col justify-center items-center p-8 bg-white">
      <h2 className="text-6xl font-extrabold text-blue-700 mb-8 tracking-wide">About Expense Tracker</h2>
      <p className="text-2xl text-gray-700 mb-10 max-w-3xl text-justify">
        <span role="img" aria-label="wallet">💸</span> Welcome to your personal Expense Tracker! This app empowers you to take control of your finances with a modern, easy-to-use interface. Effortlessly add, view, and manage your transactions, and always stay on top of your budget.
      </p>
      <ul className="mb-12 text-xl text-gray-800 space-y-4 list-disc list-inside max-w-2xl">
        <li><span role="img" aria-label="plus">➕</span> Add income and expenses instantly</li>
        <li><span role="img" aria-label="chart">📊</span> Visualize your balance at a glance</li>
        <li><span role="img" aria-label="lock">🔒</span> Secure registration and login</li>
        <li><span role="img" aria-label="mobile">📱</span> Responsive design for all devices</li>
      </ul>
      <div className="text-center mt-8">
        <span className="text-2xl text-blue-600 font-semibold italic">
          Start tracking, stay in control, and achieve your financial goals!
        </span>
      </div>
    </div>
  )
}

export default About