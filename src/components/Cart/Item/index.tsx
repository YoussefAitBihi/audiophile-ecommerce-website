import IncreaseDecreaseQuantityFormGroup from "@/components/Product/AddProductToCartForm/IncreaseDecreaseQuantityFormGroup";
import { formatPrice } from "@/helpers";
import useQuantity from "@/hooks/useQuantity";
import { CartItemDescriptor } from "@/types";
import { FC, useMemo } from "react";
import { motion } from "framer-motion";

type CartItemProps = {
  cartItem: CartItemDescriptor;
  config: "control-quantity" | "show-quantity";
};

const CartItem: FC<CartItemProps> = ({ cartItem, config }) => {
  const { quantity, decreaseQuantity, increaseQuantity } = useQuantity(cartItem.quantity, cartItem);

  const formattedPrice = useMemo(() => {
    return formatPrice(cartItem.price);
  }, [cartItem.price]);

  return (
    <motion.li
      className={`cart-item ${config === "show-quantity" ? "cart-item--show-quantity" : ""}`}
      layout
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="cart-item__content">
        <div className="cart-item__image">
          <img src={cartItem.picture} alt={cartItem.title} loading="lazy" />
        </div>
        <div>
          <h3 className="cart-item__title" title={cartItem.title}>
            {cartItem.abbreviatedTitle}
          </h3>
          <p className="cart-item__price">
            <span className="visually-hidden">The {cartItem.title} price is</span>
            {formattedPrice}
          </p>
        </div>
      </div>
      {config === "control-quantity" && (
        <IncreaseDecreaseQuantityFormGroup
          quantity={quantity}
          onDecreaseQuantity={decreaseQuantity}
          onIncreaseQuantity={increaseQuantity}
        />
      )}
      {config === "show-quantity" && (
        <p className="cart-item__quantity-value">
          <span className="visually-hidden">The {cartItem.title} quantity is</span>x
          {cartItem.quantity}
        </p>
      )}
    </motion.li>
  );
};

export default CartItem;
