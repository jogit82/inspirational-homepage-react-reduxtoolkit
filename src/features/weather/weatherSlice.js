import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import openWeatherMapApi from "../../api/openWeatherMap";
import geopifyApi from "../../api/geoapify";

export const getCoords = createAsyncThunk("weather/getCoords", () =>
  geopifyApi.getCoords()
);

export const getWeather = createAsyncThunk("weather/getWeather", (coords) =>
  openWeatherMapApi.getWeather(coords)
);

const options = {
  name: "weather",
  initialState: {
    lat: "",
    lon: "",
    metadata: {},
    temperature: "",
    minTemp: 0,
    maxTemp: 0,
    humidity: 0,
    name: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        state.metadata = action.payload.weatherMetadata;
        state.temperature = Math.round(action.payload.temperature);
        state.humidity = action.payload.humidity;
        state.maxTemp = Math.round(action.payload.maxTemp);
        state.minTemp = Math.round(action.payload.minTemp);
        state.name = action.payload.name;
      })
      .addCase(getCoords.fulfilled, (state, action) => {
        state.lat = action.payload.lat;
        state.lon = action.payload.lon;
      });
  },
};

export const weatherSlice = createSlice(options);
export const selectWeather = (state) => state.weather;
export const selectLat = (state) => state.weather.lat;
export const selectLon = (state) => state.weather.lon;
export default weatherSlice.reducer;
