import CartItem from "@/components/Cart/Item";
import PrimaryButton from "@/components/UI/Buttons/Primary";
import { formatPrice } from "@/helpers";
import { selectCart } from "@/store/slices/cart-slice";
import { useSelector } from "react-redux";

const CheckoutSummary = () => {
  const { cart } = useSelector(selectCart);

  const formattedTotal = formatPrice(cart.totalAmount);
  const formattedShipping = formatPrice(50);
  const formattedVat = formatPrice(1079);

  const formattedGrandTotal = formatPrice(cart.totalAmount + 50);

  return (
    <div className="checkout-summary">
      <h2 className="checkout-summary__title">summary</h2>
      {!cart.items.length && <p className="checkout-summary__fallback">Your cart is empty</p>}
      {cart.items.length > 0 && (
        <ul className="checkout-summary__products-list" role="list">
          {cart.items.map((item, index) => (
            <CartItem key={index} cartItem={{ ...item }} config="show-quantity" />
          ))}
        </ul>
      )}
      <ul className="checkout-summary__price-list" role="list">
        <li className="checkout-summary__price-item">
          <p className="checkout-summary__price-title">total</p>
          <p className="checkout-summary__price-value">{formattedTotal}</p>
        </li>
        <li className="checkout-summary__price-item">
          <p className="checkout-summary__price-title">shipping</p>
          <p className="checkout-summary__price-value">{formattedShipping}</p>
        </li>
        <li className="checkout-summary__price-item">
          <p className="checkout-summary__price-title">vat (included)</p>
          <p className="checkout-summary__price-value">{formattedVat}</p>
        </li>
        <li className="checkout-summary__price-item">
          <p className="checkout-summary__price-title">grand total</p>
          <p className="checkout-summary__price-value">{formattedGrandTotal}</p>
        </li>
      </ul>
      <div className="checkout-summary__submit">
        <PrimaryButton tag="button" modifier="orange" disabled={cart.items.length === 0}>
          continue & pay
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CheckoutSummary;
