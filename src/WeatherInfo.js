import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";
import AnimatedWeatherData from "./AnimatedWeatherData.js";


export default function WeatherInfo(props) {
  
  return (
    <div className="weatherinfo">
      <div className="current-weather">
        <h1>{props.data.city}</h1>
        <div className="row m-0">
          <div className="weather-image-info col-7">
            <WeatherIcon className="main-weather-icon" code={props.data.icon} size={75} />
            <WeatherTemperature celsius={props.data.temperature} />{" "}
          </div>
          <div className="weather-status col-5">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              
              <li className="text-capitalize">{props.data.description}</li>
              
              <li >
                <AnimatedWeatherData data={props.data} />
              </li>
              </ul>
              {/*create a rotation of information:humidity, percipitation, wind*/} 
          </div>
        </div>
      </div>
    </div>
  );
}
