import PrimaryButton from "@/components/UI/Buttons/Primary";
import { formatPrice } from "@/helpers";
import { AppWideStateDescriptor } from "@/types";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../Item";
import { cartActions } from "@/store/slices/cart-slice";

const CartModal = ({ onClick }: { onClick: () => void }) => {
  const { items, totalQuantity, totalAmount } = useSelector((state: AppWideStateDescriptor) => {
    return {
      items: state.cart.items,
      totalQuantity: state.cart.totalQuantity,
      totalAmount: state.cart.totalAmount,
    };
  });
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
          onClick={(e) => e.stopPropagation()}
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
                dispatch(cartActions.clearCart());
              }}
            >
              Remove all
            </button>
          </div>
          <ul className="cart-modal__items" role="list">
            {!items.length && <p className="cart-modal__fallback">Your cart is empty</p>}
            {items.length > 0 && items.map((item) => <CartItem key={item.id} {...item} />)}
          </ul>
          <div className="cart-modal__total-amount-wrapper">
            <h4 className="cart-modal__total-amount-title">total</h4>
            <p className="cart-modal__total-amount">{formattedTotalAmount}</p>
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
