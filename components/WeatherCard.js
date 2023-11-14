import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

export const weatherIcons = [sunny, rainy, partlyCloudy, cloudy];
export const weatherForecasts = ["Sunny", "Rainy", "Partly cloudy", "Cloudy"];

function WeatherCard({ data: { city, temperature, forecast } }) {
  const weatherIcon = weatherIcons[weatherForecasts.indexOf(forecast)];
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={weatherIcon}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city}</h3>
        <h5 className="card-text">{temperature} °C</h5>
        <h5 className="card-text">{forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
export default WeatherCard;
