import React from "react";

import "../TotalExpense/TotalExpenses.css";
import "./Expenses.css";
import TransactionItem from "./TransactionItem";
import Analytics from "../Analytics/Analytics";

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
  return (
    <div className="expenses">
      <Analytics />
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
