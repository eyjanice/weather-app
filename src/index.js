import React from "react";
import ReactDOM from "react-dom/client";
import "./Container.css";
import "./Search.css";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
    <p className="credit">
      <a href="https://github.com/eyjanice/weather-app">Open-source Code</a> by
      Eunyoung Cho
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
