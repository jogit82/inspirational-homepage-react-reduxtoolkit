import { configureStore } from "@reduxjs/toolkit";
import backgroundImageReducer from "../features/backgroundImage/backgroundImageSlice";

export const store = configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
  },
});
