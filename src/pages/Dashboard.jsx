import React, { useState } from 'react';
import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import AddTransaction from '../components/AddTransaction';
import TransactionList from '../components/TransactionList';

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
      <div className="w-full max-w-lg space-y-6">
        <Balance balance={balance} />
        <IncomeExpense income={income} expense={expense} />
        <AddTransaction onAdd={addTransaction} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
};

export default Dashboard;
