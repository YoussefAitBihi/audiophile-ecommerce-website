import PrimaryButton from "@/components/UI/Buttons/Primary";
import MinusIcon from "@/assets/icons/Minus";
import PlusIcon from "@/assets/icons/Plus";

const AddProductToCart = () => {
  return (
    <form className="add-product-to-cart-form">
      <div className="add-product-to-cart-form__group">
        <button className="add-product-to-cart-form__control" type="button">
          <span className="visually-hidden">Decrease the quantity</span>
          <MinusIcon />
        </button>
        <div className="add-product-to-cart-form__control add-product-to-cart-form__control--quantity">
          <span className="visually-hidden">The quantity is: </span>1
        </div>
        <button className="add-product-to-cart-form__control" type="button">
          <span className="visually-hidden">Increase the quantity</span>
          <PlusIcon />
        </button>
      </div>
      <PrimaryButton tag="button" modifier="orange">
        Add to cart
      </PrimaryButton>
    </form>
  );
};

export default AddProductToCart;
