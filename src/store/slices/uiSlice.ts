// src/slices/uiSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  hoveredPage: string;
}

const initialState: UIState = {
  hoveredPage: "default",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHoveredPage: (state, action: PayloadAction<string>) => {
      state.hoveredPage = action.payload;
    },
  },
});

export const { setHoveredPage } = uiSlice.actions;
export default uiSlice.reducer;
