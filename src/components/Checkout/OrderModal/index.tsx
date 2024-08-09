import OrderConfirmationIcon from "@/assets/icons/OrderConfirmation";
import CartItem from "@/components/Cart/Item";
import PrimaryButton from "@/components/UI/Buttons/Primary";
import { calcGrandTotal } from "@/helpers";
import { selectCart } from "@/store/slices/cart-slice";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "@/store/slices/ui-slice";

const CheckoutOrderModal = () => {
  const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);

  const { cart } = useSelector(selectCart);
  const { formattedGrandTotal } = calcGrandTotal(cart.totalAmount);

  function handleToggleItemsList() {
    setIsExpanded((prevState) => !prevState);
  }

  const modalContent = (
    <div
      className="checkout-order-modal | backdrop-400"
      onClick={() => {
        dispatch(uiActions.hideCheckoutOrderModal());
      }}
    >
      <div className="checkout-order-modal__content">
        <OrderConfirmationIcon />
        <h2 className="checkout-order-modal__title">thank you for your order</h2>
        <p>You will receive an email confirmation shortly.</p>
        <div className="checkout-order-modal__infos">
          <div className="checkout-order-modal__products-list-wrapper">
            <ul
              className="checkout-order-modal__products-list"
              id="modal-products-list"
              role="list"
            >
              {!isExpanded && <CartItem cartItem={cart.items[0]} config="show-quantity" />}
              {isExpanded &&
                cart.items.map((item) => <CartItem cartItem={item} config="show-quantity" />)}
            </ul>
            {cart.items.length > 1 && (
              <div className="checkout-order-modal__see-more-wrapper">
                <button
                  className="checkout-order-modal__see-more"
                  aria-expanded={isExpanded}
                  aria-controls="modal-products-list"
                  onClick={handleToggleItemsList}
                >
                  {!isExpanded ? `and ${cart.items.length - 1} other item(s)` : "show less"}
                </button>
              </div>
            )}
          </div>
          <div className="checkout-order-modal__grand-total">
            <h3 className="checkout-order-modal__grand-total-title">grand total</h3>
            <p className="checkout-order-modal__grand-total-value">{formattedGrandTotal}</p>
          </div>
        </div>
        <div className="checkout-order-modal__back-to-home">
          <PrimaryButton tag="link" href="/" modifier="orange">
            back to home
          </PrimaryButton>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById("modals-wrapper") as HTMLDivElement);
};

export default CheckoutOrderModal;
