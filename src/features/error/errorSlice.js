import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundImage } from "../backgroundImage/backgroundImageSlice";
import { getQuote } from "../quote/quoteSlice";
import { getWeather } from "../weather/weatherSlice";

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
    [getQuote.rejected]: (state) => {
      state.errorMessage = "Getting quote of the day failed.";
      state.retryHandler = getQuote;
    },
    [getWeather.rejected]: (state) => {
      state.errorMessage = "Getting the weather failed.";
      state.retryHandler = getWeather;
    },
  },
};

export const errorSlice = createSlice(options);

export const { clearErrorMessage } = errorSlice.actions;
export const selectError = (state) => state.error;
export default errorSlice.reducer;
