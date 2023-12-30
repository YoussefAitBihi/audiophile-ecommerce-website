import { Link } from "react-router-dom";
// import Overlay from "@/components/UI/Overlay";

const CartModal = () => {
  return (
    <>
      {/* <Overlay /> */}
      <div className="cart-modal" id="cart-modal">
        <div className="cart-modal__head">
          <h2 className="cart-modal__title">
            cart
            <div>
              <span className="cart-modal__total-items">(3)</span>
              <span className="visually-hidden">Total of items</span>
            </div>
          </h2>
          <button className="cart-modal__remove-all">Remove all</button>
        </div>
        <div className="cart-modal__body">
          <ul className="cart-modal__items" role="list"></ul>
        </div>
        <div className="cart-modal__footer">
          <div className="cart-modal__total-amount-wrapper">
            <h3 className="cart-modal__total-amount-title">total</h3>
            <p className="cart-modal__total-amount">$ 5,396</p>
          </div>
          <div className="cart-modal__action">
            <Link to="/checkout">checkout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
