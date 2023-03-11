import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    let [temperature, setTemperature] = useState(null);
    function showTemperature(response) {
        setTemperature(response.data.main.temp);
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=ab8e7ef210556986d1c9a75d6007b825&units=metric`;
    axios.get(url).then(showTemperature);


  return (
    <div className="row header">
    <div>
      <div className="calendar">
        Last updated: 12PM Feb 17 2023
      </div>
    </div>

    <div className="col-5">
      <div className="d-flex search-form">
        <span className="units">
          <a href="/#" id="celsius" className="active">
            °C
          </a>
          |
          <a href="/#" id="fahrenheit">
            °F
          </a>
        </span>
        <form className="city-search" id="city-search">
          <input
            type="search"
            placeholder="Enter a city"
            className="enter-city"
            autoComplete="off"
          />
          <input
            type="submit"
            value="Search"
            className="search-button formControl"
          />
          <input
            type="button"
            value="📍"
            className="current-location-emoji"
          />
        </form>
      </div>
    </div>

  <div>
      <div className="city-name">{props.city}</div>
      <div className="weather-description">Clear sky</div>
      <img
        src="https://openweathermap.org/img/wn/04d@2x.png"
        className="weather-icon"
        alt="weather icon"
      />
      <div className="temperature">{Math.round(temperature)}°C</div>
    </div>
    <div>
      <div className="condition-list">
        <ul>
          <li>High: 19°C</li>
          <li>Low: 10°C</li>
          <li>Humidity: 10%</li>
        </ul>
      </div>
    </div>
    </div>
  );
}