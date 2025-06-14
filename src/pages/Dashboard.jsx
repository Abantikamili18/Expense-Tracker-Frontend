import React, { useState } from 'react';
import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import AddTransaction from '../components/AddTransaction';
import TransactionList from '../components/TransactionList';

// RecentCategoriesList component: shows last 5 categories used in separate boxes
const RecentCategoriesList = ({ transactions }) => {
  // Get last 5 unique categories (most recent first)
  const seen = new Set();
  const recentCategories = transactions
    .map(txn => txn.text)
    .filter(cat => {
      if (seen.has(cat)) return false;
      seen.add(cat);
      return true;
    })
    .slice(0, 5);

  // For each recent category, calculate total price, count, and type
  const getCategoryInfo = (cat) => {
    const txns = transactions.filter(txn => txn.text === cat);
    const total = txns.reduce((acc, txn) => acc + txn.amount, 0);
    const count = txns.length;
    const type = total >= 0 ? 'Income' : 'Expense';
    return { total, count, type };
  };

  // Calculate total income and total expense for progress bars
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0) || 1;
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0) || 1;

  return (
    <div className="w-72 min-w-64 space-y-6">
      <h3 className="text-base uppercase tracking-widest text-gray-500 mb-3 px-2 font-bold">Recent Categories</h3>
      {recentCategories.length === 0 ? (
        <div className="rounded-2xl bg-white/80 shadow-sm border border-gray-200 px-6 py-8">
          <p className="text-gray-400 text-lg text-center">No categories yet</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {recentCategories.map((cat, index) => {
            const { total, count, type } = getCategoryInfo(cat);
            const percent = type === 'Income'
              ? Math.round((total / totalIncome) * 100)
              : Math.round((Math.abs(total) / totalExpense) * 100);
            return (
              <div 
                key={cat} 
                className={`rounded-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-lg border border-gray-200 px-6 py-6 hover:shadow-2xl transition-shadow duration-200 hover:bg-white flex flex-col gap-2`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-800 truncate flex-1">{cat}</span>
                  <span className={`ml-3 px-2 py-1 rounded text-xs font-bold ${type === 'Income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{type}</span>
                </div>
                <div className="flex items-center gap-4 mb-1">
                  <span className={`text-2xl font-bold ${type === 'Income' ? 'text-green-500' : 'text-red-500'}`}>₹{total}</span>
                  <span className="text-xs text-gray-500">{count} {count === 1 ? 'transaction' : 'transactions'}</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${type === 'Income' ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-red-400 to-red-600'}`}
                    style={{ width: `${Math.min(percent, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Share of {type.toLowerCase()}</span>
                  <span>{percent}%</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (txn) => {
    setTransactions([txn, ...transactions].slice(0, 5));
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((txn) => txn.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-4xl flex gap-6">
        {/* Left: Main dashboard */}
        <div className="flex-1 space-y-6">
          <Balance balance={balance} />
          <IncomeExpense income={income} expense={expense} />
          <AddTransaction onAdd={addTransaction} />
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </div>
        {/* Right: Recent Categories */}
        <RecentCategoriesList transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;