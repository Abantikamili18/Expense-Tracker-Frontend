import React, { useState } from 'react';

const categories = [
  'Salary',
  'Groceries',
  'Rent',
  'Utilities',
  'Shopping',
  'Travel',
  'Health',
  'Education',
  'Other'
];

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    onAdd({
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      description
    });

    setText('');
    setAmount('');
    setDescription('');
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6 rounded-2xl shadow-xl mb-6 border border-blue-200 animate-fade-in">
      <h3 className="text-2xl font-extrabold mb-4 text-blue-700 font-mono tracking-tight drop-shadow-lg">Add New Transaction</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category dropdown */}
        <div className="relative">
          <button
            type="button"
            className="w-full px-4 py-2 border rounded-lg bg-white text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center font-sans"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            {text || 'Select Category'}
            <svg className="w-5 h-5 ml-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <ul className={`absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 transition-all duration-200 ${dropdownOpen ? 'block' : 'hidden'}`}>
            {categories.map((cat) => (
              <li
                key={cat}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${text === cat ? 'font-bold text-blue-600' : ''}`}
                onClick={() => { setText(cat); setDropdownOpen(false); }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
        {/* Description input */}
        <input
          type="text"
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 font-sans"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (negative = expense, positive = income)"
          className="w-full px-4 py-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 font-sans"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200 flex items-center justify-center gap-2">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
