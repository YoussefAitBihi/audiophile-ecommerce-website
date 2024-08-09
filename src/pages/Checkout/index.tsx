import CheckoutForm from "@/components/Checkout/Form";
import CheckoutOrderModal from "@/components/Checkout/OrderModal";
import GoBack from "@/components/UI/Links/GoBack";
import { useSelector } from "react-redux";
import { selectOrderModalState } from "@/store/slices/ui-slice";

const CheckoutPage = () => {
  const { orderModalIsShown } = useSelector(selectOrderModalState);

  return (
    <>
      <div className="container">
        <GoBack />
        <CheckoutForm />
        {orderModalIsShown && <CheckoutOrderModal />}
      </div>
    </>
  );
};

export default CheckoutPage;
