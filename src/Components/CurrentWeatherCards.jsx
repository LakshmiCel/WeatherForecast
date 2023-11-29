import React, { useContext } from "react";
import { currentWeather, forecastWeather } from "../Context";
import "../App.css";
const CurrentWeatherCards = () => {
  const { curWthrQry } = useContext(currentWeather);
  const { forecastQuery } = useContext(forecastWeather);
  return (
    <div
      className="flex flex-wrap text-center p-2  "
      style={{ height: "max-content", backgroundColor: "#CDE1FC" }}
    >
      <div className="card small shadow-2xl w-auto">
        <h2 className="card-title">Humidity </h2>
        {curWthrQry.data && (
          <p>Humidity: {curWthrQry.data.main.humidity}%</p>
        )}{" "}
        {/* humidity block */}
      </div>
      <div className="card small shadow-2xl w-auto">
        <h2 className="card-title">Wind </h2>
        {curWthrQry.data && (
          <p>Wind Speed: {curWthrQry.data.wind.speed} m/s</p>
        )}{" "}
        {/* wind block */}
      </div>
      <div className="card small shadow-2xl w-auto">
        <h2 className="card-title">Pressure </h2>
        {forecastQuery.data && (
          <p>Pressure: {curWthrQry.data.main.pressure} hPa</p>
        )}{" "}
        {/* pressure in heptopascal block */}
      </div>
      <div className="card small shadow-2xl w-auto">
        <h2 className="card-title">Feels Like</h2>
        {curWthrQry.data && (
          <p>Feels Like: {curWthrQry.data.main.feels_like}°C</p>
        )}{" "}
        {/* temperature block */}
      </div>

      {console.log(curWthrQry.data)}
    </div>
  );
};

export default CurrentWeatherCards;
