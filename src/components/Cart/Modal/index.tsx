import PrimaryButton from "@/components/UI/Buttons/Primary";
import { clearCartFromLocalStorage, formatPrice } from "@/helpers";
import { AppWideStateDescriptor } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../Item";
import { cartActions } from "@/store/slices/cart-slice";
import { createSelector } from "@reduxjs/toolkit";

const CartModal = ({ onClick }: { onClick: () => void }) => {
  const selectCartFn = (state: AppWideStateDescriptor) => state.cart;

  const selectCart = createSelector([selectCartFn], (cart) => {
    return { cart };
  });

  const { cart } = useSelector(selectCart);
  const { items, totalAmount, totalQuantity } = cart;

  const dispatch = useDispatch();

  const formattedTotalAmount = formatPrice(totalAmount);

  return (
    <div className="cart-modal backdrop-400" id="cart-modal" onClick={onClick}>
      <div className="container">
        <motion.div
          className="cart-modal__content"
          variants={{
            hide: { y: 40, opacity: 0 },
            show: { y: 0, opacity: 1 },
          }}
          initial="hide"
          animate="show"
          exit="hide"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="cart-modal__head">
            <h2 className="cart-modal__title">
              cart
              {totalQuantity > 0 && (
                <>
                  <span className="visually-hidden">Total of products is: </span>
                  <span>({totalQuantity})</span>
                </>
              )}
            </h2>
            <button
              className="cart-modal__remove-all"
              onClick={() => {
                clearCartFromLocalStorage();
                dispatch(cartActions.clearCart());
              }}
            >
              Remove all
            </button>
          </div>
          <div className="cart-modal__body">
            <AnimatePresence mode="wait">
              {items.length > 0 && (
                <motion.ul
                  className="cart-modal__items"
                  role="list"
                  key="cart-list"
                  exit={{ opacity: 0, x: -20 }}
                >
                  <AnimatePresence>
                    {items.map((item) => (
                      <CartItem key={item.id} {...item} />
                    ))}
                  </AnimatePresence>
                </motion.ul>
              )}
              {!items.length && (
                <motion.p
                  className="cart-modal__fallback"
                  key="cart-fallback"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your cart is empty
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="cart-modal__total-amount-wrapper">
            <h4 className="cart-modal__total-amount-title">total</h4>
            <p className="cart-modal__total-amount">
              <span className="visually-hidden">The total amount is</span>
              {formattedTotalAmount}
            </p>
          </div>
          <PrimaryButton tag="link" href="/checkout" modifier="orange" disabled={!items.length}>
            checkout
          </PrimaryButton>
        </motion.div>
      </div>
    </div>
  );
};

export default CartModal;

// Layout: Animate the element position when its layout changes
// mode
// key
