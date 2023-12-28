import MinusIcon from "@/assets/icons/Minus";
import "./index.scss";
import PlusIcon from "@/assets/icons/Plus";

const CartItem = () => {
  return (
    <li className="cart-item">
      <div className="cart-item__image">Picture</div>
      <h4 className="cart-item__title">xx99 mk ii</h4>
      <p className="cart-item__amount">$2,999</p>
      <div className="cart-item__actions">
        <button className="cart-item__button">
          <MinusIcon />
          <span className="visually-hidden">Click to remove one (dynamic item title) item</span>
        </button>
        <div className="cart-item__quantity">
          <span>1</span>
          <span className="visually-hidden">The quantity of (dynamic item title)</span>
        </div>
        <button className="cart-item__button">
          <PlusIcon />
          <span className="visually-hidden">Click to add one (dynamic item title) item</span>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
