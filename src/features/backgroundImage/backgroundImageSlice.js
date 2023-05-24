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
  reducers: {},
  extraReducers: {
    [getBackgroundImage.fulfilled]: (state, action) => {
      state.imageUrls = action.payload;
      state.currentImageUrlIndex = 0;
    },
  },
};

export const backgroundImageSlice = createSlice(options);
//export const selectBackgroundImage = (state) => state.backgroundImage;
export default backgroundImageSlice.reducer;
