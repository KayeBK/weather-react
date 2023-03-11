import React from "react";

export default function WeatherForecast() {
    return (<div className="WeatherForecast">
        <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19</span>
                <span className="WeatherForecast-temperature-min">19</span>
            </div>
        </div>
        </div>
    </div>
    );
}