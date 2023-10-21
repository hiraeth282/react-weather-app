import React, { useState } from "react";

export default function TemperatureUnit(props) {
    const [unit, setUnit] = useState("celcius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    } 

    function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    if (unit === "celcius") {
        return (
         <span className="TemperatureUnit">
         <span className="current-temperature">{props.celcius}</span>
         <span className="unit">
            °C | <a href="/" onClick={showFahrenheit}>°F</a>
         </span>
         </span>
        )
    } else {
        let fahrenheit = (props.celcius * 9) / 5 + 32;
        return (
            <span className="TemperatureUnit">
            <span className="current-temperature">{Math.round(fahrenheit)}</span>
             <span className="unit">
            <a href="/" onClick={showCelcius}>°C</a> | °F
             </span>
            </span>
        )
    }
}