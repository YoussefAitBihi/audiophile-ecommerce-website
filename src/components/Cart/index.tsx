import CartIcon from "@/assets/icons/Cart";
import CartModal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/slices/ui-slice";
import { AppWideStateDescriptor } from "@/types";

const Cart = () => {
  const { cartModalIsShown, totalQuantity } = useSelector((state: AppWideStateDescriptor) => {
    return {
      cartModalIsShown: state.ui.cartModalIsShown,
      totalQuantity: state.cart.totalQuantity,
    };
  });

  const dispatch = useDispatch();

  const cartButtonAriaLabel = `Click to ${!cartModalIsShown ? "open" : "close"} the cart`;

  function handleToggleCartModal() {
    dispatch(uiActions.toggleCartModal());
  }

  return (
    <div className="cart">
      <button
        className="cart__button"
        aria-expanded={cartModalIsShown}
        aria-controls="cart-modal"
        onClick={handleToggleCartModal}
      >
        <span className="visually-hidden">{cartButtonAriaLabel}</span>
        <CartIcon />
        {totalQuantity > 0 && (
          <div className="cart__items-count">
            <span className="visually-hidden">Cart total is: </span>
            <span>{totalQuantity}</span>
          </div>
        )}
      </button>
      {cartModalIsShown && <CartModal onClick={handleToggleCartModal} />}
    </div>
  );
};

export default Cart;

// DONE: Show & Hide the cart.
// DONE: Increase and decrease the quantity.
// DONE: When the form is submitted, the product will be added to the cart.
// TODO: The quantity will reset to 1.
// TODO: In the cart, the user can add or remove a product.
// TODO: Notify the user when the product was added to cart.
// TODO: The total will be calculated when the cart is updated.
// TODO: The cart state will be saved to local storage.
