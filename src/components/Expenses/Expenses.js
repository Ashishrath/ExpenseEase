import React from "react";

import "../TotalExpense/TotalExpenses.css";
import "./Expenses.css";
import TransactionItem from "./TransactionItem";

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
      <label>Recent Transaction</label>

      <TransactionItem
        date={props.transaction[0].date.getDate()}
        day={dayName[props.transaction[0].date.getDay()]}
        title={props.transaction[0].title}
        price={props.transaction[0].amount}
      />
      <TransactionItem
        date={props.transaction[1].date.getDate()}
        day={dayName[props.transaction[1].date.getDay()]}
        title={props.transaction[1].title}
        price={props.transaction[1].amount}
      />
      <TransactionItem
        date={props.transaction[2].date.getDate()}
        day={dayName[props.transaction[2].date.getDay()]}
        title={props.transaction[2].title}
        price={props.transaction[2].amount}
      />
    </div>
  );
};

export default Expenses;
