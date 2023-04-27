import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="WeatherForecastDay ">
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <div className="card-icon">
          <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="kadh" />
        </div>
        <p className="card-text">
          {Math.round(props.data.temp.max)}° / {Math.round(props.data.temp.min)}°
        </p>
      </div>
    </div>
  );
}
