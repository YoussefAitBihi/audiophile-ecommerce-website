import { createSlice } from "@reduxjs/toolkit";
import { CartItemDescriptor, CartStateDescriptor } from "@/types";
import { findCartItemIndex } from "@/helpers";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state: CartStateDescriptor, action: { payload: CartItemDescriptor }) {
      // Search for this item
      const existingItemIndex = findCartItemIndex(state.items, action.payload.id);

      // New Item
      if (existingItemIndex === -1) {
        state.items.push(action.payload);
        // Already Exist
      } else {
        state.items[existingItemIndex].quantity += action.payload.quantity;
      }

      // Total Amount/Quantity
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    increaseQuantity(state: CartStateDescriptor, action: { payload: CartItemDescriptor }) {
      const existingItemIndex = findCartItemIndex(state.items, action.payload.id);

      if (existingItemIndex === -1) return;

      state.items[existingItemIndex].quantity += 1;

      // Total Amount/Quantity
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    decreaseQuantity(state: CartStateDescriptor, action: { payload: CartItemDescriptor }) {
      const existingItemIndex = findCartItemIndex(state.items, action.payload.id);

      if (existingItemIndex === -1) return;

      if (action.payload.quantity === 1) {
        const filteredItems = state.items.filter((item) => {
          return item.id !== action.payload.id;
        });

        state.items = filteredItems;
      } else {
        state.items[existingItemIndex].quantity -= 1;
      }

      state.totalQuantity -= 1;
      state.totalAmount -= action.payload.price;
    },
    clearCart(state: CartStateDescriptor) {
      state.items = initialState.items;
    },
  },
});

export const cartReducer = cart.reducer;
export const cartActions = cart.actions;
