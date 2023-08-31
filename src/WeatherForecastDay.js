import React from "react";

export default function WeatherForecastDay({ data, unit }) {
  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function displayTemperature(temperature) {
    if (unit === "celsius") {
      return Math.round(temperature);
    } else {
      return Math.round((temperature * 9) / 5 + 32);
    }
  }
  return (
    <span>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather icon"
          width={70}
        />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">
          {displayTemperature(data.temp.max)}°
        </span>

        <span className="forecast-temp-min">
          {displayTemperature(data.temp.min)}°
        </span>
      </div>
    </span>
  );
}
