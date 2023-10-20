import React from "react";
import axios from 'axios';
import './Weather.css'

export default function Weather() {
  const apiKey = "ef3b002ff573fa014c1eft26f3o5f207";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}&units=metric`
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Search" className="btn btn-dark w-100" />
          </div>
        </div>
      </form>
      <h1 className="mt-3">Tokyo</h1>
      <ul>
        <li>
          Saturday, 11:00
        </li>
        <li>
          Rainy
        </li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="rain icon" className="mb-4"></img>
          <span className="current-temperature">10</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>
              Precipitation: 30%
            </li>
            <li>
              Humidity: 20%
            </li>
            <li>
              Wind: 2 kph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
