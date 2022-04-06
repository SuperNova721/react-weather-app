import React from "react";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
function handleResponse(response) {
    console.log(response);
}

console.log(props);

    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiKey="e285e913cd6f177ca8795431a5a72d10";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return (
    <div className="weatherForcast">
        <div className="row">
            <div className="col">
                <div className="forcast-day">Sun</div>
                <div className="forcast-icon">Image</div>
                <div className="forcast-temperatures">
                    <span className="forcast-temperature-max">Max|</span>
                    <span className="forcast-temperature-min">Min</span>
                </div> 
            </div>
        </div>
    </div>        );
};