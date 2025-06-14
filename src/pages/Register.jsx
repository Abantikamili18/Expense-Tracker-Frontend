// RegisterPage.jsx
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200); // fake loading
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 animate-gradient-x font-[Poppins]">
      <div className="relative w-full max-w-md p-8 bg-white/90 rounded-3xl shadow-2xl backdrop-blur-md border border-green-100">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-tr from-green-400 via-blue-400 to-yellow-400 rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold text-center mb-8 font-mono tracking-tight text-green-700 drop-shadow-lg animate-fade-in">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 bg-white/90 font-sans shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white/90 font-sans shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 bg-white/90 font-sans shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-green-500 via-blue-500 to-yellow-400 text-white font-bold text-lg shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full inline-block"></span>
            ) : (
              <>
                <svg className="w-5 h-5 mr-1 inline-block animate-fade-in" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Register
              </>
            )}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500 animate-fade-in">Already registered? <a href="/login" className="text-green-600 font-semibold hover:underline">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
