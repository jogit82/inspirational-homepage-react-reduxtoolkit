import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";
import quoteReducer from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    quote: quoteReducer,
  },
});
