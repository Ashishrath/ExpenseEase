import React from "react";

import NavBar from "./components/NavBar/NavBar";
import TotalExpenses from "./components/TotalExpense/TotalExpenses";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2020, 7, 14),
    title: 'Fuel',
    amount: 200.00,
  },
  { id: 'e2',
  date: new Date(2020, 7, 15),
  title: 'Course',
  amount: 300.00, },
  {
    id: 'e3',
    date: new Date(2020, 7, 16),
    title: 'Water Bottle',
    amount: 100.00,
  },
  {
    id: 'e4',
    date: new Date(2020, 7, 17),
    title: 'Food',
    amount: 500.00,
  },
];


function App() {
  return (
    <div>
      <NavBar />
      <TotalExpenses />
      <Expenses transaction={DUMMY_EXPENSES}/>
    </div>
  );
}

export default App;
