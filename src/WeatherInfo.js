import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <div className="current-weather">
        <h1>{props.data.city}</h1>
        <div className="row m-0">
          <div className="weather-image-info col-6">
            <img
              className="weather-icon w-50"
              src={props.data.iconURL}
              alt={props.data.description}
            />
            <WeatherTemperature celsius={props.data.temperature} />{" "}
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
