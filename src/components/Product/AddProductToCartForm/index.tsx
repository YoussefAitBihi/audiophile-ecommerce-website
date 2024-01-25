import PrimaryButton from "@/components/UI/Buttons/Primary";
import FormGroup from "./FormGroup";

const AddProductToCart = () => {
  return (
    <form className="add-product-to-cart-form">
      <FormGroup />
      <PrimaryButton tag="button" modifier="orange">
        Add to cart
      </PrimaryButton>
    </form>
  );
};

export default AddProductToCart;
