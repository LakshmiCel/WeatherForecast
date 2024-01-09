import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Search from "./Components/Search";
import QueryLogic from "./QueryLogic/QueryLogic";
import React from "react";
import ForecastGrid from "./Components/ForecastCard";
import CurrentWeatherCards from "./Components/CurrentCard";
import City from "./Components/City";
import { useSelector } from "react-redux";
import { Card } from "@mui/material";
function App() {
    const search = useSelector((state) => state.weather.search);
    const forecast = useSelector((state) => state.weather.forecast);
    const current = useSelector((state) => state.weather.current);
    return (React.createElement(Paper, { elevation: 10, sx: {
            my: '5vw',
            height: "auto",
            width: "80%",
            mx: "auto",
            backgroundColor: "#5C9CE5",
            borderRadius: "10px",
            textAlign: "center",
        } },
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true, xs: 6, md: 3, sx: { height: "100%", backgroundColor: "transparent", mx: "auto" } }, search && current.cod !== '404' && React.createElement(City, null)),
            React.createElement(Grid, { item: true, container: true, xs: 12, md: 9 },
                React.createElement(Grid, { item: true, xs: 12, sx: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    } },
                    React.createElement(Grid, { sx: {
                            backgroundColor: "#E4F1FF",
                            width: "100%",
                            height: "auto",
                            alignItems: "center",
                            textAlign: "center",
                            p: 3,
                        } },
                        React.createElement(Search, null),
                        search ? (React.createElement(QueryLogic, null)) : ("Search with the appropriate CITY name"),
                        React.createElement(Paper, { elevation: 5 },
                            React.createElement(Card, { variant: "outlined", sx: { width: "100%", textAlign: "center" } }, search && forecast.cod !== "404" && React.createElement(ForecastGrid, null))))),
                search && current && (React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Grid, { sx: {
                            backgroundColor: "#CDE1FC",
                            p: 2,
                            width: "100%",
                            height: "100%",
                        } }, search && current.cod !== '404' && React.createElement(CurrentWeatherCards, null))))))));
}
export default App;
