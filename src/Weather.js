import React, { useState } from "react";
import axios from 'axios';
import './Weather.css'

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false })
  
  function handleResponse(response) {
    console.log(response.data.main)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
  })
  }
  
  const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let city = "Tokyo";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  if (weatherData.ready) {
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
        <h1 className="mt-3">{city}</h1>
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
  } else {
    return "Loading...";
  }
}
