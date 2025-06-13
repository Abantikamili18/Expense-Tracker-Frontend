import React, { useContext } from 'react'

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  
  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
  }, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Current Balance</h2>
      <p className={`text-4xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        ${Math.abs(balance).toFixed(2)}
      </p>
      {balance < 0 && <span className="text-red-500 text-sm">Deficit</span>}
    </div>
  );
};

export default Balance
