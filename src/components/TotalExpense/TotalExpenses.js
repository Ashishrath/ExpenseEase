import React from "react";

import './TotalExpenses.css';

const TotalExpenses = () => {
    return (
        <div className="expenses">
            <div className="container-fluid">
            <p className="expense-label label">This month spend</p>
            <h1 className="expense-label">₹5000</h1>
            </div>
            
        </div>
    );
}

export default TotalExpenses;