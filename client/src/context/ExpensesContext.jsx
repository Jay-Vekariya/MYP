import React, { createContext, useState } from 'react';

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const getExpenses = () => {
    return expenses;
  };

  const addExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const removeExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);


  return (
    <ExpensesContext.Provider value={{ expenses, getExpenses, addExpense, removeExpense, totalExpenses }}>

      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContext;
