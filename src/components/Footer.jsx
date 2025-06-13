import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2025 Expense Tracker. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

// Global State Provider
const GlobalProvider = ({ children }) => {
  // Initial transactions for demo purposes
  const initialTransactions = [
    {
      id: '1',
      description: 'Salary',
      amount: 3000,
      category: 'salary',
      type: 'income',
      date: '2025-06-01'
    },
    {
      id: '2',
      description: 'Grocery Shopping',
      amount: 150,
      category: 'food',
      type: 'expense',
      date: '2025-06-10'
    },
    {
      id: '3',
      description: 'Gas Station',
      amount: 60,
      category: 'transportation',
      type: 'expense',
      date: '2025-06-12'
    }
  ];

  const [transactions, dispatch] = useReducer(transactionReducer, initialTransactions);

  return (
    <TransactionContext.Provider value={{ transactions, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default Footer