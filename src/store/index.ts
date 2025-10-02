import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import heightReducer from "./slices/heightSlice";
import nctContentReducer from "./slices/nctContentSlice";
import dummyContentReducer from "./slices/dummyContentSlice";
import taeyeonContentReducer from "./slices/taeyeonSlice";
import Hearts2HeartsContentReducer from "./slices/Hearts2Hearts";
import lucyContentReducer from "./slices/lucyContentSlice";
import newJeans2ContentReducer from "./slices/newJeans2ContentSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    height: heightReducer,
    nctContent: nctContentReducer,
    taeyeonContent: taeyeonContentReducer,
    Hearts2HeartsContent: Hearts2HeartsContentReducer,
    dummyContent: dummyContentReducer,
    lucyContent: lucyContentReducer,
    newJeans2Content: newJeans2ContentReducer,
  },
});

// 타입 지원용
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
