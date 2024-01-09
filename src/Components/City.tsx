import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { CurrentWeather } from "../ReduxToolkit/WeatherSlice";

const City = () => {
  const curWthrQry: CurrentWeather | undefined = useSelector(
    (state: RootState) => state.weather.current
  );

  return (
    <Box my={10} px={5} width="100%" height="100%">
      <Card sx={{ backgroundColor: "transparent",height:'100%' }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            {curWthrQry ? curWthrQry?.name : "City Name with Degree"}
          </Typography>
          {/* {console.log(curWthrQry)} */}
          {curWthrQry && (
            <Box textAlign="center">
              <Typography variant="h6">{curWthrQry?.main?.temp}°C</Typography>
              {curWthrQry.weather && curWthrQry.weather.length > 0 && (
                <>
                  <Typography>{curWthrQry.weather[0]?.main}</Typography>
                  <Typography>
                    ({curWthrQry.weather[0]?.description})
                  </Typography>
                  <Avatar
                    src={`http://openweathermap.org/img/wn/${curWthrQry.weather[0]?.icon}.png`}
                    alt="Weather Icon"
                    sx={{ width: 200, height: 200, mx: "auto" }}
                  />
                </>
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default City;
