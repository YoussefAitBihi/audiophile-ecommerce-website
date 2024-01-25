import FormGroup from "@/components/Product/AddProductToCartForm/FormGroup";

const CartItem = () => {
  return (
    <li className="cart-item">
      <div className="cart-item__image">
        <img src="/src/assets/images/cart/image-xx99-mark-one-headphones.jpg" alt="title" />
      </div>
      <div>
        <h3 className="cart-item__title">xx99 mk ii</h3>
        <p className="cart-item__price">$2,999</p>
      </div>
      <FormGroup />
    </li>
  );
};

export default CartItem;
