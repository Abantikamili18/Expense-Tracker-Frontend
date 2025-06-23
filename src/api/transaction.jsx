// src/api/transaction.js
import axios from './axios';

export const fetchTransactions = async () => {
  const res = await axios.get('expenses/');
  return res.data;
};

export const addTransaction = async (txn) => {
  const res = await axios.post('expenses/', txn);
  return res.data;
};

export const deleteTransaction = async (id) => {
  await axios.delete(`expenses/${id}/`);
};
