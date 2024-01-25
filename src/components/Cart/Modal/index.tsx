import CartItem from "../Item";
import PrimaryButton from "@/components/UI/Buttons/Primary";

const CartModal = () => {
  return (
    <div className="cart-modal backdrop-400" id="cart-modal">
      <div className="container">
        <div className="cart-modal__content">
          <div className="cart-modal__head">
            <h2 className="cart-modal__title">
              cart
              <span className="visually-hidden">Total of products is: </span>
              <span>(3)</span>
            </h2>
            <button className="cart-modal__remove-all">Remove all</button>
          </div>
          <ul className="cart-modal__items" role="list">
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
          <div className="cart-modal__total-amount-wrapper">
            <h4 className="cart-modal__total-amount-title">total</h4>
            <p className="cart-modal__total-amount">$ 5,396</p>
          </div>
          <PrimaryButton tag="link" href="/checkout" modifier="orange">
            checkout
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
