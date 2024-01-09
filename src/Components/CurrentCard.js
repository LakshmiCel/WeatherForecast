import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
const CurrentWeatherCards = () => {
    const curWthrQry = useSelector((state) => state.weather.current);
    return (React.createElement(Box, { display: "flex", flexWrap: "wrap", justifyContent: "center", p: 2, bgcolor: "#CDE1FC" },
        React.createElement(Card, { sx: { maxWidth: 150, m: 1 } },
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "h6" }, "Humidity"),
                curWthrQry && (React.createElement(Typography, null,
                    "Humidity: ",
                    curWthrQry?.main?.humidity,
                    "%")))),
        React.createElement(Card, { sx: { maxWidth: 150, m: 1 } },
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "h6" }, "Wind"),
                curWthrQry && (React.createElement(Typography, null,
                    "Wind Speed: ",
                    curWthrQry?.wind?.speed,
                    " m/s")))),
        React.createElement(Card, { sx: { maxWidth: 150, m: 1 } },
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "h6" }, "Pressure"),
                curWthrQry && (React.createElement(Typography, null,
                    "Pressure: ",
                    curWthrQry?.main?.pressure,
                    " hPa")))),
        React.createElement(Card, { sx: { maxWidth: 150, m: 1 } },
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "h6" }, "Feels Like"),
                curWthrQry && (React.createElement(Typography, null,
                    "Feels Like: ",
                    curWthrQry?.main?.feels_like,
                    "\u00B0C"))))));
};
export default CurrentWeatherCards;
