import { configureStore } from "@reduxjs/toolkit";
import { uiReducers } from "./slices/ui-slice";

const store = configureStore({
  reducer: {
    ui: uiReducers,
  },
});

export default store;
