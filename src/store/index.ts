import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

// 타입 지원용
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
