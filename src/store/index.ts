import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import heightReducer from "./slices/heightSlice";
import nctContentReducer from "./slices/nctContentSlice";
import dummyContentReducer from "./slices/dummyContentSlice";
import taeyeonContentReducer from "./slices/taeyeonSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    height: heightReducer,
    nctContent: nctContentReducer,
    taeyeonContent: taeyeonContentReducer,
    dummyContent: dummyContentReducer,
  },
});

// 타입 지원용
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
