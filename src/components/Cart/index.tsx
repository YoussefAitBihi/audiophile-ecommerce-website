import CartIcon from "@/assets/icons/Cart";
import CartModal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/slices/ui-slice";
import { AppWideStateDescriptor } from "@/types";
import { createSelector } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { saveCartToLocalStorage } from "@/helpers";
import { useAnimate } from "framer-motion";

const Cart = () => {
  const [scope, animate] = useAnimate();

  const dispatch = useDispatch();

  const selectCartFn = (state: AppWideStateDescriptor) => state.cart;
  const selectCartModalIsShownFn = (state: AppWideStateDescriptor) => state.ui.cartModalIsShown;

  const selectCartModalStateAndCartState = createSelector(
    [selectCartFn, selectCartModalIsShownFn],
    (cart, cartModalIsShown) => {
      return { cart, cartModalIsShown };
    }
  );

  const { cart, cartModalIsShown } = useSelector(selectCartModalStateAndCartState);

  const cartButtonAriaLabel = `Click to ${!cartModalIsShown ? "open" : "close"} the cart`;

  function handleToggleCartModal() {
    dispatch(uiActions.toggleCartModal());
  }

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    if (!cart.totalQuantity) return;

    animate(
      ".cart__total-quantity",
      {
        scale: [1.2, 0.8, 1.2, 1],
      },
      {
        duration: 0.4,
      }
    );
  }, [animate, cart.totalQuantity]);

  return (
    <div className="cart" ref={scope}>
      <button
        className="cart__button"
        aria-expanded={cartModalIsShown}
        aria-controls="cart-modal"
        onClick={handleToggleCartModal}
      >
        <span className="visually-hidden">{cartButtonAriaLabel}</span>
        <CartIcon />
        {cart.totalQuantity > 0 && (
          <div className="cart__total-quantity">
            <span className="visually-hidden">Total quantity is</span>
            <span>{cart.totalQuantity}</span>
          </div>
        )}
      </button>
      {cartModalIsShown && <CartModal onClick={handleToggleCartModal} />}
    </div>
  );
};

export default Cart;

// Animate:

// TODO: Total Quantity
// TODO: Cart Item
// TODO: Cart Item Quantity
// TODO: Show Each section when scrolling

// TODO: Create a gallery carousel
