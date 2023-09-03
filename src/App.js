import React, { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import TotalExpenses from "./components/TotalExpense/TotalExpenses";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";
import Analytics from "./components/Analytics/Analytics";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2023, 7, 14),
    title: "Fuel",
    amount: 200.0,
  },
  { id: "e2", date: new Date(2023, 7, 15), title: "Course", amount: 300.0 },
  {
    id: "e3",
    date: new Date(2023, 7, 16),
    title: "Water Bottle",
    amount: 100.0,
  },
  {
    id: "e4",
    date: new Date(2023, 7, 17),
    title: "Food",
    amount: 500.0,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };

  const [formVisibility, setFormVisibility] = useState(false);

  const onAddForm = (status) => {
    setFormVisibility(status);
  };

  return (
    <div>
      <NavBar formStatus={onAddForm} />
      {formVisibility && (
        <AddExpense
          formStatus={onAddForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      <TotalExpenses items={expenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
