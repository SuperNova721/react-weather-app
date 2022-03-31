import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <div className="current-weather">
        <h2>{props.data.city}</h2>
        <div className="row m-0">
          <div className="weather-image-info col-6">
            <img
              className="weather-icon w-50"
              src={props.data.iconURL}
              alt={props.data.description}
            />
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">
              <span className="metric">°C|</span>
              <span className="fehrenheit">
                <a href="btn" target="_blank">
                  °F
                </a>
              </span>
            </span>{" "}
          </div>
          <div className="weather-status col-6">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>
                <p className="revolving-weather-info text-capitalize">
                  Revolving weather info
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
