import React from "react";

import "./Expenses";

const TransactionItem = (props) => {
  return (
    <div className="transaction-list">
      <div className="inner">
        <div className="date">
          <p>{props.date}</p>
          <p>{props.day}</p>
        </div>
        <div className="title">
          <p>{props.title}</p>
        </div>
      </div>
      <div className="price">
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
