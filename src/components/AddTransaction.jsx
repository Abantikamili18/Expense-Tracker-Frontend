import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    onAdd({
      id: Date.now(),
      text,
      amount: parseFloat(amount)
    });

    setText('');
    setAmount('');
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold mb-2">Add New Transaction</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (negative = expense, positive = income)"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
