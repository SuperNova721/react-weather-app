import React, { useState } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcast(props) {
    let [forcastLoaded, setForcastLoaded] = useState(false);
    let [forcast, setForcast] = useState(null);

    function handleResponse(response) {
    console.log(response);
    setForcast(response.data.daily)
}

if (forcastLoaded) {
    return (
        <div className="weatherForcast">
            <div className="row">
                <div className="col">
                    <div className="forcast-day">Sun</div>
                        <WeatherIcon code="01d" />
                    <div className="forcast-temperatures">
                        <span className="forcast-temperature-max">Max|</span>
                        <span className="forcast-temperature-min">Min</span>
                    </div> 
                </div>
            </div>
        </div>        
        );
   
} else {
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiKey="e285e913cd6f177ca8795431a5a72d10";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}&units=metric`;
    
    
    axios.get(apiUrl).then(handleResponse);

    return  (
        <div className="week-forcast">
            <p className="forcast">7-Day Forcast Unavailable</p>
        </div>
    
    );
};
    
};