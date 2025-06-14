import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="rounded-2xl bg-white/80 shadow-sm border border-gray-200 px-6 py-5">
      <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-3">History</h3>
      <ul className="divide-y divide-gray-100">
        {transactions.map((txn) => (
          <Transaction key={txn.id} transaction={txn} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

