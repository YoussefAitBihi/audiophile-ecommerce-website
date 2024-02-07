import IncreaseDecreaseQuantityFormGroup from "@/components/Product/AddProductToCartForm/IncreaseDecreaseQuantityFormGroup";
import { formatPrice } from "@/helpers";
import useQuantity from "@/hooks/useQuantity";
import { CartItemDescriptor } from "@/types";
import { useMemo } from "react";

const CartItem = (cartItem: CartItemDescriptor) => {
  const { quantity, decreaseQuantity, increaseQuantity } = useQuantity(cartItem.quantity, cartItem);

  const formattedPrice = useMemo(() => {
    return formatPrice(cartItem.price);
  }, [cartItem.price]);

  return (
    <li className="cart-item">
      <div className="cart-item__content">
        <div className="cart-item__image">
          <img src={cartItem.picture} alt="title" loading="lazy" />
        </div>
        <div>
          <h3 className="cart-item__title">{cartItem.abbreviatedTitle}</h3>
          <p className="cart-item__price">{formattedPrice}</p>
        </div>
      </div>
      <IncreaseDecreaseQuantityFormGroup
        quantity={quantity}
        onDecreaseQuantity={decreaseQuantity}
        onIncreaseQuantity={increaseQuantity}
      />
    </li>
  );
};

export default CartItem;
