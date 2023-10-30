import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureUnit from "./TemperatureUnit";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-sm-8">
          <WeatherIcon code={props.data.icon} size={64} />
          <TemperatureUnit celcius={props.data.temperature} />
        </div>
        <div className="col-sm-4 mt-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}kph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
