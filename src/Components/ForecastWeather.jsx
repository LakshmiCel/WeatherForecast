import React, { useContext } from "react";
import { forecastWeather } from "../Context";

const ForecastWeather = () => {
  const { forecastQuery } = useContext(forecastWeather);
  return (
    <div className="card shadow-2xl w-auto p-2">
      <h2 className="card-title mx-auto">Upcoming Forecast</h2>
      <div
        className="flex-wrap flex m-5 px-5 gap-10 w-auto"
        style={{ justifyContent: "space-evenly" }}
      >
        {forecastQuery.data.list.slice(1, 5).map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-sm">
              {new Date(item.dt * 1000).toLocaleDateString()}{" "}
              {/*convert into date from date object*/}
            </p>
            <p className="text-sm">
              {new Date(item.dt * 1000).toLocaleTimeString()}{" "}
              {/*convert into date from date object*/}
            </p>
            {item.weather[0].icon && (
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
                className="w-15 h-15 mx-auto"
              />
            )}
            <p className="capitalize">
              {item.weather[0].description}{" "}
              {/*this displays if this is sunny cloudy etc*/}
            </p>
            <p className="text-sm">{item.main.temp}°C</p>{" "}
            {/* displays temperature */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
