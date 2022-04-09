import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastLoaded, setForecastLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setForecastLoaded(true);
    
    
}

if (forecastLoaded) {
    console.log(forecast);
    return (
        <div className="weatherForecast">
            <div className="row">
                <div className="col">
                <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
        </div>        
        );
   
} else {
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiKey="e285e913cd6f177ca8795431a5a72d10";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    
    axios.get(apiUrl).then(handleResponse);

    return null;
};
    
};