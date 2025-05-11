// src/slices/heightSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeightState {
  [singer: string]: number;
}

const initialState: HeightState = {
  nct: 0,
  bts: 0,
  blackpink: 0,
  twice: 0,
  exo: 0,
  redvelvet: 0,
  straykids: 0,
  itzy: 0,
  seventeen: 0,
  aespa: 0,
  txt: 0,
  newjeans: 0,
};

export const heightSlice = createSlice({
  name: "height",
  initialState,
  reducers: {
    setHeight: (
      state,
      action: PayloadAction<{ singer: string; height: number }>
    ) => {
      const { singer, height } = action.payload;
      state[singer] = height;
    },
    resetHeights: () => initialState,
  },
});

export const { setHeight, resetHeights } = heightSlice.actions;
export default heightSlice.reducer;
