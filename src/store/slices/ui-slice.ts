import { createSlice } from "@reduxjs/toolkit";
import { UIStateDescriptor } from "@/types";

const initialState = {
  mobileNavigationIsShown: false,
  cartModalIsShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileNavigation(state: UIStateDescriptor) {
      state.mobileNavigationIsShown = !state.mobileNavigationIsShown;
    },
    toggleCartModal(state: UIStateDescriptor) {
      state.cartModalIsShown = !state.cartModalIsShown;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
