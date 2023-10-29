import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <div className="WeatherForecast-icon">☀</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
