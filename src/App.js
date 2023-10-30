import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <Weather defaultCity="Hell" />
          </div>
        </div>
        <footer className="d-flex justify-content-center mt-3">
          <a
            href="https://verdant-mermaid-8e9627.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            - Coded by Evelyn Ewald -
          </a>
          <a
            href="https://github.com/hiraeth282/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            - Open-sourced on GitHub -
          </a>
          <a
            href="https://stunning-horse-dfe047.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            - Hosted on Netlify -
          </a>
        </footer>
      </div>
    </div>
  );
}
