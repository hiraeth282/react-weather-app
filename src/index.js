import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      This project was coded by {""}
      <a
        href="https://verdant-mermaid-8e9627.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Evelyn Ewald
      </a>
      {""} and is {""}
      <a
        href="https://github.com/hiraeth282/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
    </footer>
  </React.StrictMode>,
);
