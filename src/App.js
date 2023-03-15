import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Antonio" />
      </div>

      <div className="App-link-footer">
        <a href="https://github.com/KayeBK/weather-react" target="_blank" rel="noreferrer">Open-source code on GitHub</a>, developed by Kaye Kinser.
      </div>
    </div>
  );
}

