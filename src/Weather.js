import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconURL: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="current-weather">
          <h2>{weatherData.city}</h2>
          <div className="row m-0">
            <div className="weather-image-info col-6">
              <img src={weatherData.iconURL} alt={weatherData.description} />
              {Math.round(weatherData.temperature)}°F
            </div>
            <div className="weather-info col-6">
              <ul>
                <li>Wednesday 4:30</li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
            <p className="revolving-weather-info"> Revolving weather info</p>
          </div>
          <form>
            <input
              className="search-bar"
              type="search"
              placeholder="Enter City Name..."
              autoFocus="on"
            />
            <input className="search-button" type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  } else {
    const apiKey = "e285e913cd6f177ca8795431a5a72d10";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
