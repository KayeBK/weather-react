import React from "react";

export default function City(props) {
  return (
    <div>
      <div className="city-name">{props.name}</div>
      <div className="weather-description">{props.condition}</div>
      <img
        src="https://openweathermap.org/img/wn/04d@2x.png"
        className="weather-icon"
        alt="weather icon"
      />
      <div className="temperature">{props.temperature}°C</div>
    </div>
  );
}