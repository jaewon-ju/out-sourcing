// src/slices/heightSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeightState {
  [singer: string]: number;
}

const initialState: HeightState = {
  nct: 0,
  taeyeon: 0,
  Hearts2Hearts: 0,
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
