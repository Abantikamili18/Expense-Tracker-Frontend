import React from 'react';

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="flex justify-between bg-white p-4 rounded shadow mb-4">
      <div className="text-center w-1/2 border-r">
        <h4 className="text-green-600 font-semibold">Income</h4>
        <p className="text-xl font-bold text-green-700">₹{income}</p>
      </div>
      <div className="text-center w-1/2">
        <h4 className="text-red-600 font-semibold">Expense</h4>
        <p className="text-xl font-bold text-red-700">₹{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;