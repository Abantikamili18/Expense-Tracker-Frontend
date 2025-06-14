import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const color = transaction.amount < 0 ? 'text-red-500' : 'text-green-500';
  // Format date as DD/MM/YYYY
  let dateStr = '';
  if (transaction.date) {
    const d = new Date(transaction.date);
    dateStr = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  }

  return (
    <li className="flex justify-between items-center py-2">
      <div className="flex flex-col">
        <span className="text-gray-700 font-medium">{transaction.text}</span>
        {dateStr && <span className="text-xs text-gray-400">{dateStr}</span>}
        {transaction.description && <span className="text-xs text-gray-500 italic">{transaction.description}</span>}
      </div>
      <div className="flex items-center gap-3">
        <span className={`font-semibold ${color}`}>
          {sign}₹{Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          className="rounded-full bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 p-1 transition-colors"
          title="Delete"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Transaction;
