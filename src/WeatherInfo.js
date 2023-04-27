import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="info mt-3 text-center" id="current-conditions">
        <p className="heading" id="city">
          {props.data.city}
        </p>
        <div className="date" id="day">
          <FormattedDate date={props.data.date} />
        </div>
        <p className="features">
          Humidity: {props.data.humidity}% • Wind: {props.data.wind} mph
        </p>
      </div>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="col order-2 order-sm-1 text-center text-sm-center temperature">
          <div className="temp-system">
            <span className="units">
              {/* <a id="to-f" className="active" href="#">
                          °F
                        </a> */}
              {/* <!-- <a id="to-c" href="#">°C</a>--> */}
            </span>
          </div>
          <p className="temperature-number" id="temperature">
            {Math.round(props.data.temperature)}°
          </p>

          <p className="main-weather text-capitalize">{props.data.description}</p>
          <p className="min-max">Min 52° • Max 51°</p>
        </div>
        <div className="col order-1 order-sm-2 icon text-center text-sm-center align-items-center">
          <img className="main-icon" src={props.data.iconUrl} alt={props.data.description} />
        </div>
      </div>
    </div>
  );
}
