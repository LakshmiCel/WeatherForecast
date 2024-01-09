import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
const City = () => {
    const curWthrQry = useSelector((state) => state.weather.current);
    return (React.createElement(Box, { my: 10, px: 5, width: "100%", height: "100%" },
        React.createElement(Card, { sx: { backgroundColor: "transparent", height: '100%' } },
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "h5", align: "center", gutterBottom: true }, curWthrQry ? curWthrQry?.name : "City Name with Degree"),
                curWthrQry && (React.createElement(Box, { textAlign: "center" },
                    React.createElement(Typography, { variant: "h6" },
                        curWthrQry?.main?.temp,
                        "\u00B0C"),
                    curWthrQry.weather && curWthrQry.weather.length > 0 && (React.createElement(React.Fragment, null,
                        React.createElement(Typography, null, curWthrQry.weather[0]?.main),
                        React.createElement(Typography, null,
                            "(",
                            curWthrQry.weather[0]?.description,
                            ")"),
                        React.createElement(Avatar, { src: `http://openweathermap.org/img/wn/${curWthrQry.weather[0]?.icon}.png`, alt: "Weather Icon", sx: { width: 200, height: 200, mx: "auto" } })))))))));
};
export default City;
