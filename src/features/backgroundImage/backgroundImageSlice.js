import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import unsplashApi from "../../api/unsplash";

export const getBackgroundImage = createAsyncThunk(
  "backgroundImage/getImage",
  unsplashApi.getImage
);

const options = {
  name: "backgroundImage",
  initialState: {
    imageUrls: [],
    currentImageUrlIndex: 0,
  },
  reducers: {
    switchToNextBackgroundImage: (state) => {
      state.currentImageUrlIndex =
        (state.currentImageUrlIndex + 1) % state.imageUrls.length;
    },
    switchToPreviousBackgroundImage: (state) => {
      let newIndex = state.currentImageUrlIndex - 1;
      if (newIndex < 0) {
        newIndex = state.imageUrls.length - 1;
      }

      state.currentImageUrlIndex = newIndex;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getBackgroundImage.fulfilled, (state, action) => {
      // Update image urls and set current index
      state.imageUrls = action.payload;
      state.currentImageUrlIndex = 0;
    });
  },
};

export const backgroundImageSlice = createSlice(options);
export const selectBackgroundImage = (state) => state.backgroundImage;
export const { switchToNextBackgroundImage, switchToPreviousBackgroundImage } =
  backgroundImageSlice.actions;
export default backgroundImageSlice.reducer;
