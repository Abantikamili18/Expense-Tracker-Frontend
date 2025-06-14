import React from 'react';

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="flex gap-4 justify-between bg-white/80 rounded-2xl shadow-sm border border-gray-200 px-6 py-4">
      <div className="flex-1 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">Income</span>
        <span className="text-xl font-semibold text-green-500">+₹{income}</span>
      </div>
      <div className="w-px bg-gray-200 mx-2"></div>
      <div className="flex-1 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-1">Expense</span>
        <span className="text-xl font-semibold text-red-500">-₹{expense}</span>
      </div>
    </div>
  );
};

export default IncomeExpense;