import React from 'react'
import { Link } from 'react-router-dom'

const Homain = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Take Control of Your Finances</h2>
        <p className="text-gray-600 mb-6">Track your expenses, set budgets, and stay on top of your financial goals.</p>
        <Link to="/home" className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition">Get Started</Link>
      </section>

      {/* Features */}
      <section className="bg-white py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Expense Tracking</h3>
            <p className="text-gray-600">Log and categorize your daily expenses with ease.</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
            <p className="text-gray-600">Set and manage budgets to keep your spending in check.</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Insights & Reports</h3>
            <p className="text-gray-600">Visualize your financial data and make informed decisions.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homain
