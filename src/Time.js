import React from "react";
import "./Search.css";

export default function Time(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.time.getDay();
  let hours = props.time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Time">
      <ul>
        <li>
          Last updated: {days[day]} {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
