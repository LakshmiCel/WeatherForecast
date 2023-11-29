import React from "react";
import { useContext } from "react";
import { currentWeather, forecastWeather } from "../Context";
import img from "../assets/search.gif";
import img1 from "../assets/where.png";

const Search = () => {
  const { search, setSearch, curWthrQry, handleSearch } =
    useContext(currentWeather);
  const { forecastQuery } = useContext(forecastWeather);
  return (
    <div className="" style={{ height: "50%" }}>
      <div className="join mx-auto py-5">
        <div>
          <input
            style={{ outline: 0 }}
            className="input input-bordered join-item capitalize focus-within:bg-gray-800 focus-within:text-white"
            placeholder="Search Cities"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="indicator">
          <span className="indicator-item badge">
            <i>Cities</i>
          </span>
          <button
            className="btn join-item"
            style={{ backgroundBlendMode: "color" }}
            onClick={handleSearch}
            disabled={
              !search || curWthrQry.isFetching || forecastQuery.isFetching
            }
          >
            <img src={img} width={"37px"} alt="Search" />
          </button>
        </div>
        <div>
          <div className="join-item">
            <img src={img1} width={"37px"} alt="Location" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
