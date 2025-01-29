"use client";

import { createSlice } from "@reduxjs/toolkit";
import { getRandomQuote } from "../../../quoteDB";

const NEW_QUOTE = "NEW_QUOTE";
const INITIAL_QUOTE = "INITIAL_QUOTE";

export const quoteSlice = createSlice({
  name: "quoter",
  initialState:  {
    type: INITIAL_QUOTE,
    fullQuote: getRandomQuote(),
  },
  reducers: {
    updateFullQuote: (state, action) => {
      state.type = NEW_QUOTE;
      state.fullQuote = action.payload;
      return state;
    },
  },
});

export const selectQuote = (state) => state.quoter.fullQuote.quote;
export const selectAuthor = (state) => state.quoter.fullQuote.author; 
export const selectFullQuote = (state) => state.quoter.fullQuote;
export const { updateFullQuote } = quoteSlice.actions;
export default quoteSlice.reducer;