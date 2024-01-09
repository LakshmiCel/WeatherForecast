import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentWeather,
  fetchForecast,
  setCurrentWeather,
  setForecastWeather,
} from "../ReduxToolkit/WeatherSlice";
import { Box, Typography, Backdrop, CircularProgress } from "@mui/material";
import { RootState } from "../ReduxToolkit/store";

function QueryLogic() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.weather.search);

  const currentWeatherQuery = useQuery(
    ["currentWeather", search],
    () => fetchCurrentWeather(search),
    {
      enabled: !!search,
      onSuccess: (data) => dispatch(setCurrentWeather(data)),
    }
  );

  const forecastWeatherQuery = useQuery(
    ["forecastWeather", search],
    () => fetchForecast(search),
    {
      enabled: !!search,
      onSuccess: (data) => dispatch(setForecastWeather(data)),
    }
  );

  if (currentWeatherQuery.isLoading || forecastWeatherQuery.isLoading) {
    return (
      <Backdrop
        sx={{
          zIndex: (theme: { zIndex: { drawer: number } }) =>
            theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (currentWeatherQuery.isError || forecastWeatherQuery.isError) {
    return <Box>Error fetching data</Box>;
  }

  const currentWeatherData = currentWeatherQuery.data;
  const forecastWeatherData = forecastWeatherQuery.data;

  console.log("Current Weather:", currentWeatherData);
  console.log("Forecast:", forecastWeatherData);

  return (
    <Box>
      <Typography>
        {currentWeatherData?.cod === "404"
          ? `${search} is not a proper city .Try another search with the appropriate city`
          : `${currentWeatherData?.name} has ${currentWeatherData?.main?.temp} degree celcius`}
      </Typography>
      <Typography></Typography>
    </Box>
  );
}

export default QueryLogic;
