import './App.css';
import Time from "./Time";
import Weather from "./Weather";
import City from "./City";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
        </div>

        <City name="San Antonio" condition="Clear sky" temperature={19} />
        <Weather high={34} low={19} humidity={10} />
      </div>

      <div className="link-footer">
        <a href="https://github.com/KayeBK/weather-react"> Open-source code on GitHub</a>, developed by Kaye Kinser.
      </div>
    </div>
  );
}

