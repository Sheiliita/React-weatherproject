import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temp-system">
          <span className="unit">
            <b>°C | </b>
            <a className="active" href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <p className="temperature-number" id="temperature">
          {Math.round(props.celsius)}
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temp-system">
          <span className="unit">
            <a className="active" href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            <b>| °F</b>
          </span>
        </div>
        <p className="temperature-number" id="temperature">
          {Math.round(fahrenheit())}
        </p>
      </div>
    );
  }
}
