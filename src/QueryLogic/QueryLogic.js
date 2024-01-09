import React from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather, fetchForecast, setCurrentWeather, setForecastWeather, } from "../ReduxToolkit/WeatherSlice";
import { Box, Typography, Backdrop, CircularProgress } from "@mui/material";
function QueryLogic() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.weather.search);
    const currentWeatherQuery = useQuery(["currentWeather", search], () => fetchCurrentWeather(search), {
        enabled: !!search,
        onSuccess: (data) => dispatch(setCurrentWeather(data)),
    });
    const forecastWeatherQuery = useQuery(["forecastWeather", search], () => fetchForecast(search), {
        enabled: !!search,
        onSuccess: (data) => dispatch(setForecastWeather(data)),
    });
    if (currentWeatherQuery.isLoading || forecastWeatherQuery.isLoading) {
        return (React.createElement(Backdrop, { sx: {
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }, open: true },
            React.createElement(CircularProgress, { color: "inherit" })));
    }
    if (currentWeatherQuery.isError || forecastWeatherQuery.isError) {
        return React.createElement(Box, null, "Error fetching data");
    }
    const currentWeatherData = currentWeatherQuery.data;
    const forecastWeatherData = forecastWeatherQuery.data;
    console.log("Current Weather:", currentWeatherData);
    console.log("Forecast:", forecastWeatherData);
    return (React.createElement(Box, null,
        React.createElement(Typography, null, currentWeatherData?.cod === "404"
            ? `${search} is not a proper city .Try another search with the appropriate city`
            : `${currentWeatherData?.name} has ${currentWeatherData?.main?.temp} degree celcius`),
        React.createElement(Typography, null)));
}
export default QueryLogic;
