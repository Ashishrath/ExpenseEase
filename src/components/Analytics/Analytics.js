import React from "react";

import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="container-fluid analytics">
      <div className="row-top">
        <div className="col-analytics h4">Analytics</div>
        <div className="col2">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle dropdown-button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              This week
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                This month
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row-bottom">Analytics</div>
    </div>
  );
};

export default Analytics;
