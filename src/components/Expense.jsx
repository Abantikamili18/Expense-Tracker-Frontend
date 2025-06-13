import React from 'react'

const Expense = () => {
  const { transactions } = useContext(TransactionContext);
  
  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
    
  const expense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Income</h3>
            <p className="text-3xl font-bold">${income.toFixed(2)}</p>
          </div>
          <TrendingUp className="w-12 h-12 opacity-80" />
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Expenses</h3>
            <p className="text-3xl font-bold">${expense.toFixed(2)}</p>
          </div>
          <TrendingDown className="w-12 h-12 opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Expense
