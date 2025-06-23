import React, { useEffect, useState } from 'react';
import { fetchTransactions, updateTransaction, deleteTransaction } from '../api/transaction';

const HistoryTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then(setTransactions).catch(console.error);
  }, []);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const handleEdit = async (id, updatedData) => {
    const res = await updateTransaction(id, updatedData);
    setTransactions(prev => prev.map(t => (t.id === id ? res.data : t)));
  };

  return (
    <div>
      {transactions.map(txn => (
        <div key={txn.id}>
          <p>{txn.text} - ₹{txn.amount}</p>
          <button onClick={() => handleDelete(txn.id)}>Delete</button>
          {/* Add form & button for editing using handleEdit */}
        </div>
      ))}
    </div>
  );
};

export default HistoryTransaction;
