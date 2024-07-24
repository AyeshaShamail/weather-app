import axios from "axios";
import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"da78063109ad196bc6f02c8fa2cdf5f7"}`
      );
      console.log("response", response);
      setWeather(response);
    } catch (error) {
      console.log("Getting error while fetching the weather", error);
    }
  };

  const handleWeather = () => {
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <input
        className="weather-input"
        type="text"
        value={city}
        placeholder="Enter your city name"
        onChange={handleCityChange}
      />
      <button onClick={handleWeather}>Get weather</button>
      {weather && (
        <>
          <div className="weather-info">
            <h1>{weather.data.name}</h1>
            {/* <p>The temperature is {weather.data?.main?.temp}</p> */}
            <p>
              The temperature is{" "}
              {weather.data?.main?.temp
                ? (weather.data.main.temp - 273.15).toFixed(2)
                : "N/A"}
              °C
            </p>

            <p>{weather?.data?.weather[0]?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
