import React from "react";
import { useContext } from "react";

import Search from "./Search.jsx";
import { currentWeather, forecastWeather } from "../Context.jsx";
import "../App.css";
import CurrentWeatherCards from "./CurrentWeatherCards.jsx";
import CityAside from "./CityAside.jsx";
import ForecastWeather from "./ForecastWeather.jsx";

import LoadingComponent from "./LoadingComponent.jsx";
const MainComponent = () => {
  let { curWthrQry } = useContext(currentWeather);
  let { forecastQuery } = useContext(forecastWeather);
  // let errors=curWthrQry.isError;
  return (
    <div
      className=" absolute shadow-xl flex bg-black my-10 rounded-3xl "
      style={{
        width: "80%",
        height: "max-content",
        left: "10%",
        right: "10%",
        top: "10%",
        backgroundColor: "#5C9CE5",
      }}
    >
      {curWthrQry.isFetching ? <LoadingComponent /> : <CityAside />}
      <div
        className="artboard shadow-2xl flex-row justify-items-center rounded-3xl artboard-horizontal phone-5 "
        style={{ height: "max-content", backgroundColor: "#E4F1FF" }}
      >
        <Search />

        <div className="w-auto m-5 card bg-base-100 shadow-xl flex flex-wrap">
          {!!forecastQuery.data &&
            (forecastQuery.isFetching ? (
              <LoadingComponent />
            ) : (
              <ForecastWeather />
            ))}
        </div>
        {!!curWthrQry.data ? (
          curWthrQry.isFetching ? (
            <LoadingComponent />
          ) : (
            <CurrentWeatherCards />
          )
        ) : (
          <div className="text-center text-2xl">
            Try Typing CITIES (input only appropriate Cities)
          </div>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
