import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { search: "", current: {}, forecast: {} },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCurrentWeather: (state, action) => {
      state.current = action.payload;
    },
    setForecastWeather: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { setSearch, setCurrentWeather, setForecastWeather } =
  weatherSlice.actions;
export default weatherSlice.reducer;

export interface CurrentWeather {
  cod?: string;
  name?: string;
  weather?: {
    id?: number;
    main: string;
    description?: string;
    icon?: string;
  }[];
  main?: {
    temp?: number;
    feels_like?: number;
    humidity?: number;
    pressure?: number;
  };
  wind?: {
    speed?: number;
    deg?: number;
    gust?: number;
  };
}

export interface ForecastWeather {
  cod?: string;
  list?: {
    dt?: number;
    weather?: {
      id?: number;
      main?: string;
      description?: string;
      icon?: string;
    }[];
    main?: {
      temp?: number;
    };
  }[];
}

export const fetchCurrentWeather = async (
  search: string
): Promise<CurrentWeather> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=dd56fcde6f9a0e2c11cb3d3ad1017892`
  );
  const data = await res.json();
  return data;
};

export const fetchForecast = async (
  search: string
): Promise<ForecastWeather> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=dd56fcde6f9a0e2c11cb3d3ad1017892`
  );
  const data = await res.json();
  return data;
};
