import React from "react";
import "./AnimatedWeatherData.css";

export default function AnimatedWeatherData(props) {
  let windSpeed = `WindSpeed: ${Math.round(props.data.windSpeed)}`;

  return (
    <div className="AnimatedWeatherData">
      <span className="data-first">Wind: {Math.round(props.data)}mph</span>
    </div>
  );
}
