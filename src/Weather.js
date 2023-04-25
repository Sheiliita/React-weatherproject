import React, { useState } from "react";
import Footer from "./Footer";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <section id="weather">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="card shadow rounded" id="weather-card">
                  <div id="card-header">
                    <h1>Weather App</h1>
                  </div>

                  <div id="card-body" className="p-lg-5 pt-lg-0 p-3 pt-0 pb-3">
                    <div className="form-outline">
                      <form id="search-form" action="" className="text-center">
                        <div id="form-style">
                          <div className="child1">
                            <input type="search" id="search-box" className="search-form mx-auto w-100" placeholder="🔍Enter a city..." />
                            <button id="search-city" className="btn btn-primary" type="submit">
                              Search
                            </button>
                          </div>
                          <div className="child2">
                            <button id="current-temp" className="btn btn-success">
                              Current
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="info mt-3 text-center" id="current-conditions">
                      <p className="heading" id="city">
                        {weatherData.city}
                      </p>
                      <div className="date" id="day">
                        <FormattedDate date={weatherData.date} />
                      </div>
                      <p className="features">
                        Humidity: {weatherData.humidity}% • Wind: {weatherData.wind} mph
                      </p>
                    </div>
                    <div className="row mt-4 justify-content-center align-items-center">
                      <div className="col order-2 order-sm-1 text-center text-sm-start temperature">
                        <div className="temp-system">
                          <span className="units">
                            {/* <a id="to-f" className="active" href="#">
                          °F
                        </a> */}
                            {/* <!-- <a id="to-c" href="#">°C</a>--> */}
                          </span>
                        </div>
                        <p className="temperature-number" id="temperature">
                          {Math.round(weatherData.temperature)}°
                        </p>

                        <p className="main-weather text-capitalize">{weatherData.description}</p>
                        <p className="min-max">Min 52° • Max 51°</p>
                      </div>
                      <div className="col order-1 order-sm-2 icon text-center text-sm-end align-items-center" style={{ width: `250px`, height: `250px` }} id="main-icon">
                        <img src={weatherData.iconUrl} alt={weatherData.description} />
                      </div>
                    </div>

                    <div className="row temp-boxes gap-1 gap-lg-3 mt-4 ms-0 me-0 justify-content-center justify-content-md-between text-center" id="forecast"></div>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "b2ef35a4ca3a9550a2888bed0b3cf675";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
