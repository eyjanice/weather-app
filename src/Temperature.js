import React from "react";
import "./Search.css";

export default function Temperature({ celsius, unit, setUnit }) {
  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="temperature">
        <span className="degreeNumber">{Math.round(celsius)}</span>{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={setFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        <span className="degreeNumber">
          {Math.round((celsius * 9) / 5 + 32)}
        </span>{" "}
        <span className="unit">
          <a href="/" onClick={setCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
