import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather />
      </div>
      <footer>
        This app was created by{" "}
        <a
          href="https://www.linkedin.com/in/holly-hadley7"
          target="_blank"
          rel="noreferrer"
        >
          Holly Hadley
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/SuperNova721/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
