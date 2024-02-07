import PrimaryButton from "@/components/UI/Buttons/Primary";
import IncreaseDecreaseQuantityFormGroup from "./IncreaseDecreaseQuantityFormGroup";
import { FC, FormEvent } from "react";
import { CartItemDescriptor } from "@/types";
import { cartActions } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import useQuantity from "@/hooks/useQuantity";
import NotificationUI from "@/components/UI/Notification";
import { selectNotificationState, uiActions } from "@/store/slices/ui-slice";
import { AnimatePresence } from "framer-motion";

const AddProductToCart: FC<{ cartItem: CartItemDescriptor }> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { notificationIsShown } = useSelector(selectNotificationState);

  const { quantity, decreaseQuantity, increaseQuantity } = useQuantity(1);

  function submitForm(event: FormEvent) {
    event.preventDefault();

    dispatch(
      cartActions.addItemToCart({
        ...cartItem,
        quantity,
      })
    );

    dispatch(uiActions.showNotification());
  }

  return (
    <>
      <AnimatePresence>
        {notificationIsShown && (
          <NotificationUI
            title={cartItem.title}
            action="add"
            onClick={() => dispatch(uiActions.hideNotification())}
          />
        )}
      </AnimatePresence>
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
    </>
  );
};

export default AddProductToCart;
