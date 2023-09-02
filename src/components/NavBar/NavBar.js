import React from "react";

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ExpenseEase
        </a>
        <button className="btn btn-outline-light btn_custom" type="button">
          Add New Expense
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
