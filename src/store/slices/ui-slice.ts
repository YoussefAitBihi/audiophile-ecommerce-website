import { createSlice } from "@reduxjs/toolkit";
import { AppWideStateDescriptor, UIStateDescriptor } from "@/types";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  mobileNavigationIsShown: false,
  cartModalIsShown: false,
  notificationIsShown: false,
  checkoutOrderModalIsShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    init() {
      return initialState;
    },
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
    showCheckoutOrderModal(state: UIStateDescriptor) {
      state.checkoutOrderModalIsShown = true;
    },
    hideCheckoutOrderModal(state: UIStateDescriptor) {
      state.checkoutOrderModalIsShown = false;
    },
  },
});

const selectNotificationStateFn = (state: AppWideStateDescriptor) => state.ui.notificationIsShown;

const selectOrderModalStateFn = (state: AppWideStateDescriptor) =>
  state.ui.checkoutOrderModalIsShown;

export const selectNotificationState = createSelector(
  [selectNotificationStateFn],
  (notificationIsShown) => {
    return { notificationIsShown };
  }
);

export const selectOrderModalState = createSelector(
  [selectOrderModalStateFn],
  (orderModalIsShown) => {
    return {
      orderModalIsShown,
    };
  }
);

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
