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
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    let amt = Math.abs(parseFloat(amount));
    if (type === 'Expense') amt = -amt;
    onAdd({
      id: Date.now(),
      text,
      amount: amt,
      description,
      date: new Date().toISOString()
    });
    setText('');
    setAmount('');
    setDescription('');
    setType('Income');
  };

  return (
    <div className="rounded-2xl bg-white/80 shadow-sm border border-gray-200 px-6 py-5 mb-2">
      <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-3">Add Transaction</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <select
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <div className="relative flex-1">
            <button
              type="button"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-left text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              {text || 'Select Category'}
            </button>
            <ul className={`absolute left-0 right-0 mt-1 bg-white rounded-lg border border-gray-100 shadow z-10 max-h-40 overflow-y-auto ${dropdownOpen ? 'block' : 'hidden'}`}>
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`px-3 py-2 cursor-pointer hover:bg-blue-50 ${text === cat ? 'font-bold text-blue-600' : ''}`}
                  onClick={() => { setText(cat); setDropdownOpen(false); }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <input
          type="text"
          placeholder="Description"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold text-base shadow hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
