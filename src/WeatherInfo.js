import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <div className="current-weather">
        <h2>{props.data.city}</h2>
        <div className="row m-0">
          <div className="weather-image-info col-6">
            <img src={props.data.iconURL} alt={props.data.description} />
            {Math.round(props.data.temperature)}°F
          </div>
          <div className="weather-info col-6">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <p className="revolving-weather-info"> Revolving weather info</p>
        </div>
      </div>
    </div>
  );
}
