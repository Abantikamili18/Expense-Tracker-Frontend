import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">History</h3>
      <ul>
        {transactions.map((txn) => (
          <Transaction key={txn.id} transaction={txn} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

