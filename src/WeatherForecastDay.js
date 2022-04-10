import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    
    return `${maxTemp}°`;
}

function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    
    return `${minTemp}°`;
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day]; 
    
}

    return (
    <div> 
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="forecast-temperatures">
            <span className="forecast-temperature-max">{maxTemperature()} |</span>
            <span className="forecast-temperature-min"> {minTemperature()}</span>
        </div> 
    </div>
    
    );
}