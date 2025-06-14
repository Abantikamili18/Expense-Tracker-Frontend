// RegisterPage.jsx
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
    </div>
  );
};

export default RegisterPage;
