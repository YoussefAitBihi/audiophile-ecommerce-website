import CartIcon from "@/assets/icons/Cart";
import CartModal from "./Modal";

const Cart = () => {
  return (
    <div className="cart">
      <button className="cart__button" aria-expanded="false" aria-controls="cart-modal">
        <span className="visually-hidden">Click to open the cart</span>
        <CartIcon />
      </button>
      <CartModal />
    </div>
  );
};

export default Cart;
