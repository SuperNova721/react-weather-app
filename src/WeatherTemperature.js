import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="weather-temperature" inline>
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="units">
        <span className="metric">°C|</span>
        <span className="fehrenheit">
          <a href="btn" target="_blank">
            °F
          </a>
        </span>
      </span>
    </div>
  );
}
