import React from "react";

export default function Weather(props) {
  return (
    <div>
      <div className="condition-list">
        <ul>
          <li>High: {props.high}°C</li>
          <li>Low: {props.low}°C</li>
          <li>Humidity: {props.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}