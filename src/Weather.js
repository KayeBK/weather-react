import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
      console.log(response.data);
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        temp_max: response.data.main.temp_max,
        temp_min: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon
      });
    }
  function search() {
    const apiKey = `5ef4de8cd6b7fefcd7c42f98cf464ce8`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

    function handleSubmit(event) {
      event.preventDefault();
      search(city);
    }

    function citySearch(event) {
      setCity(event.target.value);
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
        <form className="Weather-city-search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="Weather-enter-city"
            autoFocus="on"
            onChange={citySearch}
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
    <WeatherInfo data={weatherData} />
    <hr />
    <h3 className="forecast-title">Daily Forecast</h3>
    <hr />
    <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
  );
} else {
  search();
  return "Loading..";
}
}