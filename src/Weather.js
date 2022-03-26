import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="current-weather">
        <h2>London</h2>
        <ul>
          <li>Wednesday 4:30</li>
          <li>Description: Cloudy</li>
        </ul>
      </div>
    </div>
  );
}
