import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quotesApi from "../../api/quotes";

export const getQuote = createAsyncThunk("quote/getQuote", quotesApi.getQuote);

const options = {
  name: "quote",
  initialState: {
    quote: "",
    author: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    });
  },
};

export const quoteSlice = createSlice(options);
export const selectQuote = (state) => state.quote;
export default quoteSlice.reducer;
