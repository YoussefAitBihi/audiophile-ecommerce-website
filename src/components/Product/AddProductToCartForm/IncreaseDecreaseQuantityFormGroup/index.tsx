import MinusIcon from "@/assets/icons/Minus";
import PlusIcon from "@/assets/icons/Plus";

type IncreaseDecreaseProps = {
  quantity: number;
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
};

const IncreaseDecreaseQuantityFormGroup = ({
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
}: IncreaseDecreaseProps) => {
  return (
    <div className="add-product-to-cart-form-group">
      <button
        className="add-product-to-cart-form-group__control"
        type="button"
        onClick={onDecreaseQuantity}
      >
        <span className="visually-hidden">Decrease the quantity</span>
        <MinusIcon />
      </button>
      <div className="add-product-to-cart-form-group__control add-product-to-cart-form-group__control--quantity">
        <span className="visually-hidden">The quantity is: </span>
        <span>{quantity}</span>
      </div>
      <button
        className="add-product-to-cart-form-group__control"
        type="button"
        onClick={onIncreaseQuantity}
      >
        <span className="visually-hidden">Increase the quantity</span>
        <PlusIcon />
      </button>
    </div>
  );
};

export default IncreaseDecreaseQuantityFormGroup;
