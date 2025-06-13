import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </nav>
        </header>

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Expense Tracker</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
