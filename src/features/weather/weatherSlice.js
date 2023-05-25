import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/openWeatherMap";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  ({ city, state }) => openWeatherMapApi.getWeather(city, state)
);

const options = {
  name: "weather",
  initialState: {
    city: "Seattle",
    state: "Washington",
    metadata: {},
    temperature: "",
    minTemp: 0,
    maxTemp: 0,
    humidity: 0,
    name: "Seattle",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.metadata = action.payload.weatherMetadata;
      state.temperature = action.payload.temperature;
      state.humidity = action.payload.humidity;
      state.maxTemp = action.payload.maxTemp;
      state.minTemp = action.payload.minTemp;
      state.name = action.payload.name;
    },
  },
};

export const weatherSlice = createSlice(options);
export const selectWeather = (state) => state.weather;
export const { setCity, setState } = weatherSlice.actions;
export default weatherSlice.reducer;
