import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const color = transaction.amount < 0 ? 'text-red-600' : 'text-green-600';

  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{transaction.text}</span>
      <div className="flex items-center space-x-2">
        <span className={`${color} font-semibold`}>
          {sign}₹{Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </li>
  );
};

export default Transaction;
