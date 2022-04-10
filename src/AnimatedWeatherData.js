import React from "react";
import "./AnimatedWeatherData.css";

export default function AnimatedWeatherData(props) {
    let humidity = `Humidity: ${props.data.humidity}`;
    let windSpeed = `WindSpeed: ${Math.round(props.data.windSpeed)}`;
    let feelsLike = `Feels Like: ${Math.round(props.data.feels_like)}°C`;
    const data = [humidity, windSpeed, feelsLike];
    data.forEach()
        
        }
    });


    return (
        
        <div className="AnimatedWeatherData">
            <span className="data-first">{data[0]}</span>
        </div>
    );
}
