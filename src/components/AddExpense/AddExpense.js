import React, { useState } from "react";

import "./AddExpense.css";

const AddExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const onClickHandler = () => {
    props.formStatus(false);
}

  return (
    <div className="add-expense">
      <div className="container-fluid">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              min="2023-01-01"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="d-grid gap-2 d-md-flex">
            <button type="submit" className="btn btn-dark">
              Add Expense
            </button>
            <button type="button" className="btn btn-dark" onClick={onClickHandler}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
