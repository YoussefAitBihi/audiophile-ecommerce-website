import CheckoutForm from "@/components/Checkout/Form";
import GoBack from "@/components/UI/Links/GoBack";

const CheckoutPage = () => {
  return (
    <div className="container">
      <GoBack />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
