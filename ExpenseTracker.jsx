// FamilyExpensesHome.js

import React, { useState } from 'react';
import './ExpenseTracker.css'; // Import the corresponding CSS file

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  const handleAddExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  

  return (
    <div className="family-expenses-container">
      <h2>Family Expenses</h2>
      
      <div className="expenses-section">
        <h3>Expenses</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <strong>{expense.description}:</strong> ${expense.amount}
              
            </li>
          ))}
        </ul>
      </div>

      <div className="summary-section">
        <h3>Summary</h3>
        <p>Total Expenses: ${expenses.reduce((total, exp) => total + parseFloat(exp.amount), 0)}</p>
      </div>

      <div className="add-expense-section">
        <h3>Add Expense</h3>
        <form>
          <label>
            Description:
            <input
              type="text"
              value={newExpense.description}
              onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
            />
          </label>
          <button type="button" onClick={handleAddExpense}>
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;