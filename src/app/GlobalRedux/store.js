"use client";
import { configureStore } from "@reduxjs/toolkit";
import { quoterReducer, quoteSlice } from "./Features/QuoteMachine/quoteSlice";
import { randColorReducer, colorSlice } from "./Features/RandomColor/colorSlice";

export const store = configureStore({
  reducer: {
    quoter: quoteSlice.reducer,
    randColor: colorSlice.reducer,
  },
});