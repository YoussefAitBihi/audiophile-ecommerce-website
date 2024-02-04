import PrimaryButton from "@/components/UI/Buttons/Primary";
import IncreaseDecreaseQuantityFormGroup from "./IncreaseDecreaseQuantityFormGroup";
import { FC, FormEvent } from "react";
import { CartItemDescriptor } from "@/types";
import { cartActions } from "@/store/slices/cart-slice";
import { useDispatch } from "react-redux";
import useQuantity from "@/hooks/useQuantity";

const AddProductToCart: FC<{ cartItem: CartItemDescriptor }> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { quantity, decreaseQuantity, increaseQuantity } = useQuantity(1);

  function submitForm(event: FormEvent) {
    event.preventDefault();

    dispatch(
      cartActions.addItemToCart({
        ...cartItem,
        quantity,
      })
    );
  }

  return (
    <form className="add-product-to-cart-form" onSubmit={submitForm}>
      <IncreaseDecreaseQuantityFormGroup
        quantity={quantity}
        onDecreaseQuantity={decreaseQuantity}
        onIncreaseQuantity={increaseQuantity}
      />
      <PrimaryButton tag="button" modifier="orange">
        Add to cart
      </PrimaryButton>
    </form>
  );
};

export default AddProductToCart;
