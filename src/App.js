import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <Weather defaultCity = "Hell" />
          </div>
        </div>
        <footer className="d-flex justify-content-center">
          This project was coded by{" "} 
          <a
            href="https://verdant-mermaid-8e9627.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Evelyn Ewald
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/hiraeth282/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
