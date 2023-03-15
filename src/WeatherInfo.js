import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
    <div className="Weather-city-name">{props.data.city}</div>
    <div className="Weather-description text-capitalize">{props.data.description}</div>
  <div className="row">
    <div className="col-1">
      <img
        src="https://openweathermap.org/img/wn/04d@2x.png"
        className="Weather-icon"
        alt="weather icon"
      />
    </div>
    <div className="col-7">
      <span className="Weather-main-temperature">{Math.round(props.data.temperature)}</span><span className="Weather-units">°C | °F</span>
      </div>

    <div className="col-4">
      <div className="Weather-condition-list">
        <ul>
          <li>High: {Math.round(props.data.temp_max)}°C</li>
          <li>Low: {Math.round(props.data.temp_min)}°C</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
    </div>
    </div>);
}