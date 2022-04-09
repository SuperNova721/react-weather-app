import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForcast from "./WeatherForcast"; 


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels_like: response.data.main.feels_like,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "e285e913cd6f177ca8795431a5a72d10";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <WeatherInfo data={weatherData} />
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="search"
            placeholder="Enter City Name..."
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
        <WeatherForcast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
