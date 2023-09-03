import React, { useState } from "react";

import "../TotalExpense/TotalExpenses.css";
import "./Expenses.css";
import TransactionItem from "./TransactionItem";
import Analytics from "../Analytics/Analytics";
import ExpensesAnalytics from "./ExpenseAnalytics";

const dayName = [
     'Sun',
     'Mon',
     'Tue',
     'Wed',
     'Thu',
     'Fri',
     'Sat',
];

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === "2023";//filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesAnalytics expenses={filteredExpenses} />
      <label className="label-recent-transaction">Recent Transaction</label>
      {props.items.map((expense) => (
        <TransactionItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          date={expense.date.getDate()}
          day={dayName[expense.date.getDay()]}
        />
      ))}
    </div>
  );
};

export default Expenses;
