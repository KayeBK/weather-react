import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
      console.log(response.data);
      setWeatherData({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed        
      });
    }
    

if (weatherData.ready) {
  return (
    <div>
    <div className="row">
      <div className="col-8">
        Last updated: <span className="Weather-current-time">
          <FormattedDate date={weatherData.date} />
          </span>
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

    <div className="Weather-city-name">{weatherData.city}</div>
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
      <span className="Weather-main-temperature">{Math.round(weatherData.temperature)}</span><span className="Weather-units">°C | °F</span>
      </div>

    <div className="col-4">
      <div className="Weather-condition-list">
        <ul>
          <li>High: 19°C</li>
          <li>Low: 10°C</li>
          <li>Humidity: {weatherData.humidity} %</li>
          <li>Wind Speed: {weatherData.wind} km/h</li>
        </ul>
      </div>
    </div>
    </div>
    <h3>6 Day Forecast</h3>
        <hr />
    <div className="Weather-forecast">
        <div className="row">
        <div className="col-2">
            <div className="Weather-forecast-day">Thu</div>
            <div className="Weather-forecast-temperatures">
                <span className="Weather-forecast-temperature-max">19</span>
                <span className="Weather-forecast-temperature-min">10</span>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
} else {
  const apiKey = `ab8e7ef210556986d1c9a75d6007b825`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading..";
}
}