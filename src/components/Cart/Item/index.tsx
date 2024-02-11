import IncreaseDecreaseQuantityFormGroup from "@/components/Product/AddProductToCartForm/IncreaseDecreaseQuantityFormGroup";
import { formatPrice } from "@/helpers";
import useQuantity from "@/hooks/useQuantity";
import { CartItemDescriptor } from "@/types";
import { useMemo } from "react";
import { motion } from "framer-motion";

const CartItem = (cartItem: CartItemDescriptor) => {
  const { quantity, decreaseQuantity, increaseQuantity } = useQuantity(cartItem.quantity, cartItem);

  const formattedPrice = useMemo(() => {
    return formatPrice(cartItem.price);
  }, [cartItem.price]);

  return (
    <motion.li className="cart-item" layout exit={{ opacity: 0, x: -20 }}>
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
      <IncreaseDecreaseQuantityFormGroup
        quantity={quantity}
        onDecreaseQuantity={decreaseQuantity}
        onIncreaseQuantity={increaseQuantity}
      />
    </motion.li>
  );
};

export default CartItem;
