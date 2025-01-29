"use client";

import { createSlice } from "@reduxjs/toolkit";
import { randomColor } from "../../../random-colors";

const NEW_COLOR = "NEW_COLOR";
const INITIAL_COLOR = "INITIAL_COLOR";

export const colorSlice = createSlice({
  name: "randColor",
  initialState: {
    type: INITIAL_COLOR,
    color: randomColor(1, 127, 9),
  },
  reducers: {
    updateColor: (state, action) => {
      state.type = NEW_COLOR;
      state.color = action.payload;
      return state;
    },
  },
});

export const selectColor = (state) => state.randColor.color;
export const { updateColor } = colorSlice.actions;
export default colorSlice.reducer;