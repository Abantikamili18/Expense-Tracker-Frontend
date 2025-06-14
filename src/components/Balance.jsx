import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="rounded-2xl bg-white/80 shadow-sm border border-gray-200 px-6 py-5 flex flex-col items-center">
      <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">Balance</span>
      <span className="text-3xl font-bold text-gray-800">₹{balance}</span>
    </div>
  );
};

export default Balance;
