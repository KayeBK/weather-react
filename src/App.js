import './App.css';
import Time from "./Time";
import Weather from "./Weather";
import City from "./City";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather high={34} low={19} humidity={10} />
        <WeatherForecast />
      </div>

      <div className="link-footer">
        <a href="https://github.com/KayeBK/weather-react">Open-source code on GitHub</a>, developed by Kaye Kinser.
      </div>
    </div>
  );
}

