import React, { useState } from "react";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
    });
  }
  function search() {
    const apiKey = "b2ef35a4ca3a9550a2888bed0b3cf675";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
                      <form onSubmit={handleSubmit} id="search-form" action="" className="text-center">
                        <div id="form-style">
                          <div className="child1">
                            <input type="search" id="search-box" className="search-form mx-auto w-100" placeholder="🔍Enter a city..." onChange={handleCityChange} />
                            <button id="search-city" className="btn btn-primary" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <WeatherInfo data={weatherData} />
                    <WeatherForecast coordinates={weatherData.coord} />
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
    search();
    return "Loading...";
  }
}
