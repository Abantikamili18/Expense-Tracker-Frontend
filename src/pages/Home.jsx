import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 animate-fade-in-down">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-700 mb-4 drop-shadow animate-bounce">Expense Tracker</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 animate-fade-in">Take Control of Your Finances</h2>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium animate-fade-in">
          Track your expenses, set budgets, and stay on top of your financial goals.
        </p>
        <Link to="/login" className="px-10 py-4 bg-blue-600 text-white text-2xl rounded-xl shadow-lg hover:bg-blue-700 transition animate-fade-in">Get Started</Link>
      </section>

      {/* Features */}
      <section className="bg-white bg-opacity-80 py-16 px-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-blue-200 to-blue-50 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-3 text-blue-800">Expense Tracking</h3>
            <p className="text-lg text-gray-700">Log and categorize your daily expenses with ease.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-200 to-purple-50 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
            <h3 className="text-2xl font-bold mb-3 text-purple-800">Budget Planning</h3>
            <p className="text-lg text-gray-700">Set and manage budgets to keep your spending in check.</p>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-50 rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-400">
            <h3 className="text-2xl font-bold mb-3 text-pink-800">Insights & Reports</h3>
            <p className="text-lg text-gray-700">Visualize your financial data and make informed decisions.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home