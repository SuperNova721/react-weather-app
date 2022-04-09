import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "02d": "CLEAR_NIGHT",
        "02n": "PARTLY_CLOUDY_DAY",
        "03d": "PARTLY_CLOUDY_NIGHT",
        "03n": "PARTLY_CLOUDY_DAY",
        "04d": "PARTLY_CLOUDY_NIGHT",
        "04n": "CLOUDY",
        "09d": "CLOUDY",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    };

    return (
            <ReactAnimatedWeather
            icon= {codeMapping[props.code]}
            color="#3e7496"
            size={props.size}
            animated={true}
            />
        
    );
}