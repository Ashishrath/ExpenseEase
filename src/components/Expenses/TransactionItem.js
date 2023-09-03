import React from "react";

import "./Expenses.css";

const TransactionItem = (props) => {
  return (
    <div className="transaction-list">
      <div className="row1">
        <div className="column1">
          <div className="date__div">
            <p className="text-center pdate">{props.date}</p>
            <p className="text-center pdate">{props.day}</p>
          </div>
          <div className="title">
            {props.title}
          </div>
        </div>
        <div className="price">
        ₹ {props.price}
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
