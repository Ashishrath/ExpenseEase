import React from "react";

import "./Analytics.css";
import AnalyticsBar from "./AnalyticsBar";

const Analytics = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

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
              This year
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                This year
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row-bottom">
      {props.dataPoints.map((dataPoint) => (
        <AnalyticsBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      </div>
    </div>
  );
};

export default Analytics;
