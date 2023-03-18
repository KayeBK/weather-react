import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Antonio" />
      </div>

      <div className="App-link-footer">
        Developed by Kaye Kinser, open-sourced on <a href="https://github.com/KayeBK/weather-react" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://teal-cheesecake-72006b.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </div>
    </div>
  );
}

