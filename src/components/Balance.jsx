import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold text-gray-700">Your Balance</h3>
      <p className="text-2xl font-bold text-gray-900">₹{balance}</p>
    </div>
  );
};

export default Balance;
