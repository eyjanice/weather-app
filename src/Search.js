import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import "./Search.css";
import Temperature from "./Temperature";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [result, setResult] = useState(false);

  const searchWeather = (
    <form className="mb-3 searchBar" onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-60"
          />
        </div>
      </div>
    </form>
  );

  function showWeather(response) {
    setResult(true);
    setWeather({
      time: new Date(response.data.dt * 1000),
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
        <Time time={weather.time} />
        {city !== "" && (
          <div>
            <h1>{city}</h1>
            <div className="row">
              <div className="col-6">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                />{" "}
                <Temperature celsius={weather.temperature} />
              </div>
              <div className="col-6">
                <ul>
                  <li>{weather.description}</li>
                  <li>Humidity: {weather.humidity}%</li>
                  <li>Wind: {Math.round(weather.wind)}km/h</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <div className="Weather">{searchWeather}</div>;
  }
}
