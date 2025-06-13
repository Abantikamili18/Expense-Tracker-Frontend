import React from 'react'

const List = () => {
  const { transactions } = useContext(TransactionContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const categories = [
    'food', 'transportation', 'entertainment', 'shopping', 'bills', 
    'healthcare', 'education', 'salary', 'freelance', 'investment', 'other'
  ];

  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
      const matchesType = filterType === 'all' || transaction.type === filterType;
      
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [transactions, searchTerm, filterCategory, filterType]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h3>
      
      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="all">All Types</option>
            <option value="income">Income Only</option>
            <option value="expense">Expenses Only</option>
          </select>
        </div>
      </div>
      
      {/* Transaction List */}
      <div className="max-h-96 overflow-y-auto space-y-2">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <DollarSign className="w-12 h-12 mx-auto opacity-50" />
            </div>
            <p className="text-gray-500">
              {transactions.length === 0 ? 'No transactions yet. Add your first transaction above!' : 'No transactions match your filters.'}
            </p>
          </div>
        ) : (
          filteredTransactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        )}
      </div>
    </div>
  );
};

export default List
