import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { ForecastWeather } from "../ReduxToolkit/WeatherSlice";

interface WeatherItem {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

interface ForecastCardProps {
  item?: {
    dt?: number;
    weather?: WeatherItem[];
    main?: {
      temp?: number;
    };
  };
}

const ForecastCard = ({ item }: ForecastCardProps) => {
  if (!item) {
    return null;
  }

  return (
    <Card variant="outlined" sx={{ width: 150, textAlign: "center" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.dt && new Date(item.dt * 1000).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.dt && new Date(item.dt * 1000).toLocaleTimeString()}
        </Typography>
        {item.weather?.[0]?.icon && (
          <Avatar
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt={item.weather[0].description || "Weather Icon"}
            sx={{ width: 50, height: 50, mx: "auto" }}
          />
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textTransform: "capitalize" }}
        >
          {item.weather?.[0]?.description || "No Description"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.main?.temp !== undefined
            ? `${item.main.temp}°C`
            : "No Temperature"}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ForecastGrid = () => {
  const forecast: ForecastWeather = useSelector(
    (state: RootState) => state.weather.forecast
  );
  const search=useSelector((state:RootState)=>state.weather.search)
  if (!search) {
    return null; // Don't render anything if there is no data
  }

  return (
    <Box
      sx={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Upcoming Forecast
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={2}
        sx={{ m: [1, 2], flexWrap: "wrap" }}
      >
        {forecast?.list
          ?.slice(1, 5)
          .map((item, index) => <ForecastCard key={index} item={item} />)}
      </Stack>
    </Box>
  );
};

export default ForecastGrid;
