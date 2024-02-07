import { useDispatch } from "react-redux";
import { CartItemDescriptor } from "@/types";
import { cartActions } from "@/store/slices/cart-slice";
import { useState } from "react";

/**
 * Allows to decrease and increase the quantity.
 * @param quantityArg
 * @param cartItem
 * @returns
 */
const useQuantity = (quantityArg: number, cartItem?: CartItemDescriptor) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(quantityArg);

  /**
   * Decrease the quantity
   * @returns void
   */
  function decreaseQuantity() {
    // We don't wanna check the quantity if we are in cart modal.
    // Because, we wanna delete the cart item if equal to 1.
    if (quantity === 1 && !cartItem) return;

    setQuantity((preQuantity) => {
      return --preQuantity;
    });

    if (cartItem) {
      dispatch(cartActions.decreaseQuantity(cartItem));
    }
  }

  /**
   * Increase the quantity
   * @returns void
   */
  function increaseQuantity() {
    if (quantity >= 10) return;

    setQuantity((preQuantity) => {
      return ++preQuantity;
    });

    if (cartItem) {
      dispatch(cartActions.increaseQuantity(cartItem));
    }
  }

  return {
    quantity,
    decreaseQuantity,
    increaseQuantity,
  };
};

export default useQuantity;
