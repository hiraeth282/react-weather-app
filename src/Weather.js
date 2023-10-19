import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Search" className="btn btn-dark" />
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
          <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="rain icon" width="80" height="80"></img>
          10°C
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
