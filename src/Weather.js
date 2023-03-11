import React from "react";
import Time from "./Time";
import City from "./City";

export default function Weather(props) {
  return (
    <div className="row header">
    <Time time="12PM" calendar="Feb 17 2023" />

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

  <City name="San Antonio" condition="Clear sky" temperature={19} />
    <div>
      <div className="condition-list">
        <ul>
          <li>High: {props.high}°C</li>
          <li>Low: {props.low}°C</li>
          <li>Humidity: {props.humidity}%</li>
        </ul>
      </div>
    </div>
    </div>
  );
}