import MinusIcon from "@/assets/icons/Minus";
import PlusIcon from "@/assets/icons/Plus";

const FormGroup = () => {
  return (
    <div className="add-product-to-cart-form-group">
      <button className="add-product-to-cart-form-group__control" type="button">
        <span className="visually-hidden">Decrease the quantity</span>
        <MinusIcon />
      </button>
      <div className="add-product-to-cart-form-group__control add-product-to-cart-form-group__control--quantity">
        <span className="visually-hidden">The quantity is: </span>1
      </div>
      <button className="add-product-to-cart-form-group__control" type="button">
        <span className="visually-hidden">Increase the quantity</span>
        <PlusIcon />
      </button>
    </div>
  );
};

export default FormGroup;
