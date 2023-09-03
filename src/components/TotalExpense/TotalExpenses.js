import React from "react";

import './TotalExpenses.css';

const TotalExpenses = (props) => {
    const getCurrentMonthExpenses = (expenses) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
      
        return expenses.filter((expense) => {
          return expense.date.getMonth() === currentMonth;
        });
      };

      const calculateTotalExpenses = (expenses) => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
      };

      const currentMonthExpenses = getCurrentMonthExpenses(props.items);
      const totalCurrentMonthExpenses = calculateTotalExpenses(currentMonthExpenses);
    return (
        <div className="expenses">
            <div className="container-fluid">
            <p className="expense-label label">This month spend</p>
            <h1 className="expense-label">₹{totalCurrentMonthExpenses}</h1>
            </div>
            
        </div>
    );
}

export default TotalExpenses;