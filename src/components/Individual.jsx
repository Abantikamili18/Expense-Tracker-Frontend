import React from 'react'

const Individual = ({ transaction }) => {
  const { dispatch } = useContext(TransactionContext);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id });
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-4 mb-3 border-l-4 hover:shadow-lg transition-shadow ${
      transaction.type === 'income' ? 'border-green-500' : 'border-red-500'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{transaction.description}</h4>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-gray-500 capitalize">{transaction.category}</span>
            <span className="text-sm text-gray-500">{transaction.date}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className={`text-lg font-bold ${
            transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
          }`}>
            {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
          </span>
          
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Individual