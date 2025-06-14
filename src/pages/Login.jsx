// LoginPage.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
    </div>
  );
};

export default Login;