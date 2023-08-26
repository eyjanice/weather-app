import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [result, setResult] = useState(false);

  const searchWeather = (
    <form className="searchBar" onSubmit={onSubmitHandler}>
      <input type="search" onChange={onChangeHandler} />
      <input type="submit" value="Search" />
    </form>
  );

  function showWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    setCity(query);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1dbf926d3b4417bf379db7043bec1047&units=metric`;
    setResult(false);
    axios.get(url).then(showWeather).catch(console.log);
  }

  function onChangeHandler(event) {
    setQuery(event.target.value);
  }
  if (result) {
    return (
      <div className="Weather">
        {searchWeather}
        {city !== "" && (
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {Math.round(weather.wind)}km/h</li>
            <li>
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.description}
              />
            </li>
          </ul>
        )}
      </div>
    );
  } else {
    return <div className="Weather">{searchWeather}</div>;
  }
}
