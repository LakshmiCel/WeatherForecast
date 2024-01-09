import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField } from "@mui/material";
import { setSearch } from "../ReduxToolkit/WeatherSlice";
import img1 from "../assets/search.gif";
import { debounce } from "lodash";
function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const search = useSelector((state) => state.weather.search);
    const debouncedDispatch = useCallback(debounce((newSearchTerm) => {
        dispatch(setSearch(newSearchTerm));
    }, 1000), []);
    const handleSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        debouncedDispatch(newSearchTerm);
    };
    return (React.createElement(Box, { display: "flex", flexDirection: "column", alignItems: "center", height: "4.2rem", position: "relative" },
        React.createElement(Grid, { sx: { display: "flex" } },
            React.createElement(TextField, { placeholder: "Search City Name", value: searchTerm, onChange: handleSearchChange, label: "City" }),
            React.createElement(Box, { mt: 2 },
                React.createElement("img", { src: img1, width: "37px", alt: "Location" })))));
}
export default Search;
