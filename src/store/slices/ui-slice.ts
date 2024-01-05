import { createSlice } from "@reduxjs/toolkit";
import { UIStateDescriptor } from "@/types/props";

const initialState = {
  mobileNavigationIsShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileNavigation(state: UIStateDescriptor) {
      state.mobileNavigationIsShown = !state.mobileNavigationIsShown;
    },
  },
});

export const uiReducers = uiSlice.reducer;
export const uiActions = uiSlice.actions;
