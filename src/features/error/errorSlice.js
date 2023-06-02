import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundImage } from "../backgroundImage/backgroundImageSlice";
import { getQuote } from "../quote/quoteSlice";
import { getCoords, getWeather } from "../weather/weatherSlice";

const options = {
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null,
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;
    },
  },
  extraReducers: {
    [getBackgroundImage.rejected]: (state) => {
      state.errorMessage = "Getting image failed.";
      state.retryHandler = getBackgroundImage;
    },
    [getBackgroundImage.pending]: (state) => {
      state.errorMessage = "";
    },
    [getQuote.rejected]: (state) => {
      state.errorMessage = "Getting quote of the day failed.";
      state.retryHandler = getQuote;
    },
    [getQuote.pending]: (state) => {
      state.errorMessage = "";
    },
    [getWeather.rejected]: (state) => {
      state.errorMessage = "";
      state.retryHandler = getWeather;
    },
    [getWeather.pending]: (state) => {
      state.errorMessage = "";
    },
    [getCoords.rejected]: (state) => {
      state.errorMessage = "Getting user coordinates failed.";
      state.retryHandler = getCoords;
    },
    [getCoords.pending]: (state) => {
      state.errorMessage = "";
    },
  },
};

export const errorSlice = createSlice(options);

export const { clearErrorMessage } = errorSlice.actions;
export const selectError = (state) => state.error;
export default errorSlice.reducer;
