import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Search from "./Components/Search";
import QueryLogic from "./QueryLogic/QueryLogic";
import React from "react";
import ForecastGrid from "./Components/ForecastCard";
import CurrentWeatherCards from "./Components/CurrentCard";
import City from "./Components/City";
import { useSelector } from "react-redux";
import { RootState } from "./ReduxToolkit/store";
import { Card } from "@mui/material";
import { CurrentWeather, ForecastWeather } from "./ReduxToolkit/WeatherSlice";

function App() {
  const search = useSelector((state: RootState) => state.weather.search);
  const forecast:ForecastWeather = useSelector((state: RootState) => state.weather.forecast);
  const current:CurrentWeather = useSelector((state: RootState) => state.weather.current);
  return (
    <Paper
      elevation={10}
      sx={{
        my: '5vw',
        height: "auto",
        width: "80%",
        mx: "auto",
        backgroundColor: "#5C9CE5",
        borderRadius: "10px",
       textAlign: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={6}
          md={3}
          sx={{ height: "100%", backgroundColor: "transparent", mx: "auto" }}
        >
          {search && current.cod!=='404' && <City />}
        </Grid>
        <Grid item container xs={12} md={9}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                backgroundColor: "#E4F1FF",
                width: "100%",
                height: "auto",
                alignItems: "center",
                textAlign: "center",
                p: 3,
              }}
            >
              <Search />
              {search ? (
                <QueryLogic />
              ) : (
                "Search with the appropriate CITY name"
              )}
              <Paper elevation={5}>
                <Card
                  variant="outlined"
                  sx={{ width: "100%", textAlign: "center" }}
                >
                  {search && forecast.cod !== "404" && <ForecastGrid />}
                </Card>
              </Paper>
            </Grid>
          </Grid>
          {search && current && (
            <Grid item xs={12}>
              <Grid
                sx={{
                  backgroundColor: "#CDE1FC",
                  p: 2,
                  width: "100%",
                  height: "100%",
                }}
              >
                {search && current.cod!=='404' && <CurrentWeatherCards />}
                {/* {console.log(search,"fromApp")} */}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
