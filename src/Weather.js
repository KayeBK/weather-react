import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    let [temperature, setTemperature] = useState(null);
    function showTemperature(response) {
        setTemperature(response.data.main.temp);
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=ab8e7ef210556986d1c9a75d6007b825&units=metric`;
    axios.get(url).then(showTemperature);


  return (
    <div>
    <div className="row">
      <div className="col-8">
        Last updated: <span className="Weather-current-time">12PM Feb 17 2023</span>
      </div>

      <div className="col-4 Weather-search-form">
        <form className="Weather-city-search">
          <input
            type="search"
            placeholder="Enter a city"
            className="Weather-enter-city"
            autoComplete="off"
            autoFocus="on"
          />
          <input
            type="submit"
            value="Search"
            className="Weather-search-button"
          />
          <input
            type="button"
            value="📍"
            className="Weather-current-location-emoji"
          />
        </form>
      </div>
    </div>

    <div className="Weather-city-name">{props.city}</div>
    <div className="Weather-description">Clear sky</div>
  <div className="row">
    <div className="col-1">
      <img
        src="https://openweathermap.org/img/wn/04d@2x.png"
        className="Weather-icon"
        alt="weather icon"
      />
    </div>
    <div className="col-7">
      <span className="Weather-main-temperature">{Math.round(temperature)}</span><span className="Weather-units">°C | °F</span>
      </div>

    <div className="col-4">
      <div className="Weather-condition-list">
        <ul>
          <li>High: 19°C</li>
          <li>Low: 10°C</li>
          <li>Humidity: 10%</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}