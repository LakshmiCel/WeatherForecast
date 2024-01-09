import React from "react";
import { Card, CardContent, Typography, Stack, Avatar, Box, } from "@mui/material";
import { useSelector } from "react-redux";
const ForecastCard = ({ item }) => {
    if (!item) {
        return null;
    }
    return (React.createElement(Card, { variant: "outlined", sx: { width: 150, textAlign: "center" } },
        React.createElement(CardContent, null,
            React.createElement(Typography, { variant: "body2", color: "text.secondary" }, item.dt && new Date(item.dt * 1000).toLocaleDateString()),
            React.createElement(Typography, { variant: "body2", color: "text.secondary" }, item.dt && new Date(item.dt * 1000).toLocaleTimeString()),
            item.weather?.[0]?.icon && (React.createElement(Avatar, { src: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`, alt: item.weather[0].description || "Weather Icon", sx: { width: 50, height: 50, mx: "auto" } })),
            React.createElement(Typography, { variant: "body2", color: "text.secondary", sx: { textTransform: "capitalize" } }, item.weather?.[0]?.description || "No Description"),
            React.createElement(Typography, { variant: "body2", color: "text.secondary" }, item.main?.temp !== undefined
                ? `${item.main.temp}°C`
                : "No Temperature"))));
};
const ForecastGrid = () => {
    const forecast = useSelector((state) => state.weather.forecast);
    const search = useSelector((state) => state.weather.search);
    if (!search) {
        return null; // Don't render anything if there is no data
    }
    return (React.createElement(Box, { sx: {
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
        } },
        React.createElement(Typography, { variant: "h5", align: "center", gutterBottom: true }, "Upcoming Forecast"),
        React.createElement(Stack, { direction: "row", justifyContent: "space-evenly", spacing: 2, sx: { m: [1, 2], flexWrap: "wrap" } }, forecast?.list
            ?.slice(1, 5)
            .map((item, index) => React.createElement(ForecastCard, { key: index, item: item })))));
};
export default ForecastGrid;
