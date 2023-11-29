import React from "react";
import { useContext } from "react";
import { currentWeather } from "../Context";

const CityAside = () => {
  const { curWthrQry } = useContext(currentWeather);
  return (
    <div className="my-10 px-5" style={{ width: "40%", height: "max-content" }}>
      <div className="card-body">
        <h2 className="card-title mx-auto">
          {curWthrQry.data ? curWthrQry.data.name : "City Name with Degree"}
        </h2>
        {curWthrQry.data && (
          <div>
            <p>{curWthrQry.data.main.temp}°C</p>
            <p>{curWthrQry.data.weather[0].main}</p>
            <p>({curWthrQry.data.weather[0].description})</p>
          </div>
        )}
        {/* {console.log(curWthrQry.data.weather[0].icon)} */}
        {/* {console.log(forecastQuery.data.list[0].weather[0].icon)} */}
        {curWthrQry.data && (
          <img
            src={`http://openweathermap.org/img/wn/${curWthrQry.data.weather[0].icon}.png`}
            alt={"image"}
            className=" mx-auto"
            style={{ width: "200px", height: "200px" }}
          />
        )}
      </div>
    </div>
  );
};

export default CityAside;
