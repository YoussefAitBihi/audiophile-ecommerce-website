import { createSlice, createSelector } from "@reduxjs/toolkit";
import { AppWideStateDescriptor, CartItemDescriptor, CartStateDescriptor } from "@/types";
import { loadCartFromLocalStorage } from "@/helpers";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const loadedCartState = loadCartFromLocalStorage();

const cart = createSlice({
  name: "cart",
  initialState: loadedCartState ? loadedCartState : initialCartState,
  reducers: {
    addItemToCart(state: CartStateDescriptor, action: { payload: CartItemDescriptor }) {
      // Search for this item
      const existingItemIndex = findCartItemIndex(state.items, action.payload.id);

      // New Item
      if (existingItemIndex === -1) {
        state.items.push(action.payload);
        // Already Exist (Increase the quantity with new one)
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

      // Remove permanently the item from cart
      if (action.payload.quantity === 1) {
        const filteredItems = state.items.filter((item) => {
          return item.id !== action.payload.id;
        });

        state.items = filteredItems;
        // Increase the quantity
      } else {
        state.items[existingItemIndex].quantity -= 1;
      }

      // Total Amount/Quantity
      state.totalQuantity -= 1;
      state.totalAmount -= action.payload.price;
    },
    clearCart() {
      return initialCartState;
    },
  },
});

const selectCartFn = (state: AppWideStateDescriptor) => state.cart;

export const selectCart = createSelector([selectCartFn], (cart) => {
  return { cart };
});

/**
 * Allows to retrieve the index of an existing cart item. Returns -1 if not found.
 * @param items
 * @param itemId
 * @returns
 */
export const findCartItemIndex = (items: CartItemDescriptor[], itemId: string) => {
  const existingItemIndex = items.findIndex((item) => {
    return item.id === itemId;
  });

  return existingItemIndex;
};

export const cartActions = cart.actions;

export default cart.reducer;
