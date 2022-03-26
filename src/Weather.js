import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="current-weather">
        <h2>London</h2>
        <div className="row m-0">
          <div className="weather-image-info col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />
            62°F
          </div>
          <div className="weather-info col-6">
            <ul>
              <li>Wednesday 4:30</li>
              <li>Description: Cloudy</li>
            </ul>
          </div>
          <p className="revolving-weather-info"> Revolving weather info</p>
        </div>
        <form>
          <input
            className="search-bar"
            type="search"
            placeholder="Enter City Name..."
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
