import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [forecastLoaded, setForecastLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setForecastLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setForecastLoaded(true);
}

if (forecastLoaded) {
    return (
        <div className="weatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 6) {
                    return (
                        
                            <div className="five-day-forecast col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                            </div>
                        
                        );
                    } else {
                        return null;
                    }
                    })}
            </div>
        </div>        
        );
   
} else {
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiKey="7bfd34b4ce42580110533a973b61ecc9";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    
    axios.get(apiUrl).then(handleResponse);

    return null;
};
    
}