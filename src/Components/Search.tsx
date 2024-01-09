import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, TextField } from "@mui/material";
import { setSearch } from "../ReduxToolkit/WeatherSlice";
import img1 from "../assets/search.gif";
import { debounce } from "lodash";
import { RootState } from "../ReduxToolkit/store";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.weather.search);

  const debouncedDispatch = useCallback(
    debounce((newSearchTerm) => {
      dispatch(setSearch(newSearchTerm));
    }, 1000),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    debouncedDispatch(newSearchTerm);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="4.2rem"
      position="relative"
    >
      <Grid sx={{ display: "flex" }}>
        <TextField
          placeholder="Search City Name"
          value={searchTerm}
          onChange={handleSearchChange}
          label="City"
        />
        <Box mt={2}>
          <img src={img1} width={"37px"} alt="Location" />
        </Box>
      </Grid>
    </Box>
  );
}

export default Search;
