import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "../App.css";
import {
  currentWeather,
  forecastWeather,
  fetchCurrentWeather,
  fetchForecast,
} from "../Context";
import MainComponent from "./MainComponent";

const AppCopy = () => {
  const [search, setSearch] = useState("");
  const [isBtnClicked, setisBtnClicked] = useState(false);

  const curWthrQry = useQuery({
    queryKey: ["currentWeather", search],
    queryFn: () => fetchCurrentWeather(search),
    enabled: isBtnClicked && !!search,
  });

  const forecastQuery = useQuery({
    queryKey: ["forecast", search],
    queryFn: () => fetchForecast(search),
    enabled: isBtnClicked && !!search,
  });

  const handleSearch = () => {
    setisBtnClicked(true);
    // if this is true then we initiate the search

    if (!curWthrQry.isFetching && !forecastQuery.isFetching) {
      curWthrQry.refetch();
      forecastQuery.refetch();
      setisBtnClicked(false); // toggling the state is done fron true to false ,this stops the search
    }
    console.log(curWthrQry);
  };
  const passValueForCur = {
    search,
    setSearch,
    isBtnClicked,
    setisBtnClicked,
    handleSearch,
    curWthrQry,
  };
  const passValueForForecast = { forecastQuery };
  return (
    <currentWeather.Provider value={passValueForCur}>
      <forecastWeather.Provider value={passValueForForecast}>
        <MainComponent />
      </forecastWeather.Provider>
    </currentWeather.Provider>
  );
};

export default AppCopy;
