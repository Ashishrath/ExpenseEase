import React from "react";

import './NavBar.css';

const NavBar = (props) => {
    const onClickHandler = () => {
        props.formStatus(true);
    }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ExpenseEase
        </a>
        <button className="btn btn-outline-light btn_custom" type="button" onClick={onClickHandler}>
          Add New Expense
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
