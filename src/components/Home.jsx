import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">Welcome to Expense Tracker</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Track your income and expenses, visualize your spending, and take control of your finances with ease.
        </p>
        <a href="#" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
          Get Started
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default Home;