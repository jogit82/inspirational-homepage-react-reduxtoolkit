import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import quoteReducer from "../features/quote/quoteSlice";
import weatherReducer from "../features/weather/weatherSlice";
import journalReducer from "../features/journal/journalSlice";

export const store = configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    quote: quoteReducer,
    weather: weatherReducer,
    journal: journalReducer,
  },
});
