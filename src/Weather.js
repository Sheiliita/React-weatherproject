import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
  };
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
                          <input type="search" id="search-box" className="search-form mx-auto w-100" placeholder="🔍Enter city..." />
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
                    <p className="date" id="day">
                      Thursday 2:00PM
                    </p>
                    <p className="features">Humidity: 82% • Wind: 7 mph</p>
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
                        47
                      </p>

                      <p className="main-weather">Cloudy</p>
                      <p className="min-max">Min 52° • Max 51°</p>
                    </div>
                    <div className="col order-1 order-sm-2 icon text-center text-sm-end align-items-center" id="main-icon">
                      <lord-icon
                        src="https://cdn.lordicon.com/qrodhbts.json"
                        trigger="hover"
                        colors="primary:#d9edfd"
                        // style="width: 250px; height: 250px;"
                      ></lord-icon>
                    </div>
                  </div>

                  <div className="row temp-boxes gap-1 gap-lg-3 mt-4 ms-0 me-0 justify-content-center justify-content-md-between text-center" id="forecast"></div>
                </div>
                <div id="card-footer" className="ps-5 pe-5">
                  <hr className="mx-auto" />
                  <p className="text-center fs-6">
                    This was coded by
                    <span>
                      <a href="https://www.shecodes.io/graduates/66604-sheila-sanchez" target="_blank" rel="noreferrer noopener">
                        Sheila Sanchez
                      </a>
                    </span>
                    /
                    <span>
                      <a href="https://github.com/Sheiliita/first-weather-app" target="_blank" rel="noreferrer noopener">
                        Github code
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
