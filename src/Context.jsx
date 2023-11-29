import { createContext } from "react";
export const currentWeather = createContext(" Current weather");
export const forecastWeather = createContext(" forecast weather");

export const fetchCurrentWeather = async (search) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=dd56fcde6f9a0e2c11cb3d3ad1017892`
  );
  const data = await res.json();
  return data;
};

export const fetchForecast = async (search) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=dd56fcde6f9a0e2c11cb3d3ad1017892`
  );
  const data = await res.json();
  return data;
};
