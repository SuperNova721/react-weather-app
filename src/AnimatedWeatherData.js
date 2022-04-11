import React from "react";
import "./AnimatedWeatherData.css";

export default function AnimatedWeatherData(props) {
  return (
    <div className="AnimatedWeatherData">
      <span className="data-first">Wind: {Math.round(props.data)}mph</span>
    </div>
  );
}
