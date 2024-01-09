import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { CurrentWeather } from "../ReduxToolkit/WeatherSlice";

const CurrentWeatherCards = () => {
  const curWthrQry: CurrentWeather = useSelector(
    (state: RootState) => state.weather.current
  );

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      p={2}
      bgcolor="#CDE1FC"
    >
      {/* {console.log(curWthrQry)} */}
      <Card sx={{ maxWidth: 150, m: 1 }}>
        <CardContent>
          <Typography variant="h6">Humidity</Typography>
          {curWthrQry && (
            <Typography>Humidity: {curWthrQry?.main?.humidity}%</Typography>
          )}
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 150, m: 1 }}>
        <CardContent>
          <Typography variant="h6">Wind</Typography>
          {curWthrQry && (
            <Typography>Wind Speed: {curWthrQry?.wind?.speed} m/s</Typography>
          )}
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 150, m: 1 }}>
        <CardContent>
          <Typography variant="h6">Pressure</Typography>
          {curWthrQry && (
            <Typography>Pressure: {curWthrQry?.main?.pressure} hPa</Typography>
          )}
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 150, m: 1 }}>
        <CardContent>
          <Typography variant="h6">Feels Like</Typography>
          {curWthrQry && (
            <Typography>
              Feels Like: {curWthrQry?.main?.feels_like}°C
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CurrentWeatherCards;
