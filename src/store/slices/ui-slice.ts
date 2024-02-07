import { createSlice } from "@reduxjs/toolkit";
import { AppWideStateDescriptor, UIStateDescriptor } from "@/types";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  mobileNavigationIsShown: false,
  cartModalIsShown: false,
  notificationIsShown: false,
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
    showNotification(state: UIStateDescriptor) {
      state.notificationIsShown = true;
    },
    hideNotification(state: UIStateDescriptor) {
      state.notificationIsShown = false;
    },
  },
});

const selectNotificationStateFn = (state: AppWideStateDescriptor) => state.ui.notificationIsShown;

export const selectNotificationState = createSelector(
  [selectNotificationStateFn],
  (notificationIsShown) => {
    return { notificationIsShown };
  }
);

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
