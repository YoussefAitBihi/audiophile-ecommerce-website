import FormField from "@/components/UI/Form/Field";
import FormSection from "@/components/UI/Form/Section";
import CheckoutSummary from "../Summary";
import useFormCheckout from "@/hooks/useFormCheckout";
import CashOnDeliveryIcon from "@/assets/icons/CashOnDelivery";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const CheckoutForm = () => {
  const { handleInputBlur, handleSubmit, state } = useFormCheckout();

  const initialState = useMemo(() => {
    return {
      eMoney: true,
      cashOnDelivery: false,
    };
  }, []);

  const [isShown, setIsShown] = useState(initialState);

  useEffect(() => {
    const radioInputs = document.querySelectorAll(
      ".form-field__control[type=radio]"
    ) as NodeListOf<HTMLInputElement>;

    function handleRadioChange(event: unknown) {
      const eventTS = event as ChangeEvent<HTMLInputElement>;

      const { value } = eventTS.target;

      setIsShown({
        eMoney: false,
        cashOnDelivery: false,
        [value]: true,
      });
    }

    for (const input of radioInputs) {
      input.addEventListener("change", handleRadioChange);
    }

    return () => {
      for (const input of radioInputs) {
        input.removeEventListener("change", handleRadioChange);
      }
    };
  }, []);

  return (
    <form className="checkout-form" method="POST" onSubmit={handleSubmit}>
      <div className="checkout-form__form-fields">
        <h1 className="quaternary-heading">Checkout</h1>
        <FormSection title="billing details">
          <div className="checkout-form__even-columns">
            <FormField
              type="text"
              label="name"
              placeholder="Youssef Ait Bihi"
              name="name"
              errorMessage={state.name.errorMessage}
              onBlur={handleInputBlur}
            />
            <FormField
              type="email"
              label="email address"
              placeholder="youssefaitbihi@gmail.com"
              name="email"
              errorMessage={state.email.errorMessage}
              onBlur={handleInputBlur}
            />
          </div>
          <FormField
            type="tel"
            label="Phone number"
            placeholder="+212-6148-43563"
            name="phone"
            errorMessage={state.phone.errorMessage}
            onBlur={handleInputBlur}
          />
        </FormSection>

        <FormSection title="shipping info">
          <FormField
            type="text"
            label="address"
            placeholder="1137 Mohamed IV"
            name="address"
            errorMessage={state.address.errorMessage}
            onBlur={handleInputBlur}
          />
          <div className="checkout-form__even-columns">
            <FormField
              type="number"
              label="zip code"
              placeholder="20440"
              name="zip"
              errorMessage={state.zip.errorMessage}
              onBlur={handleInputBlur}
            />
            <FormField
              type="text"
              label="city"
              placeholder="Casablanca"
              name="city"
              errorMessage={state.city.errorMessage}
              onBlur={handleInputBlur}
            />
          </div>
          <FormField
            type="text"
            label="country"
            placeholder="Morocco"
            name="country"
            errorMessage={state.country.errorMessage}
            onBlur={handleInputBlur}
          />
        </FormSection>

        <FormSection title="payment details">
          <div className="checkout-form__even-columns">
            <p className="form-field__label">Payment method</p>
            <div>
              <FormField
                type="radio"
                label="e-Money"
                defaultValue="eMoney"
                name="payment"
                defaultChecked={true}
                errorMessage={state.payment.errorMessage}
                onBlur={handleInputBlur}
              />
              <FormField
                type="radio"
                label="cash on delivery"
                defaultValue="cashOnDelivery"
                name="payment"
                errorMessage={state.payment.errorMessage}
                onBlur={handleInputBlur}
              />
            </div>
          </div>
          {isShown.cashOnDelivery && (
            <motion.div
              className="checkout-form__cash-on-delivery-infos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <CashOnDeliveryIcon />
              </div>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                arrives at your residence. Just make sure your address is correct so that your order
                will not be cancelled.
              </p>
            </motion.div>
          )}
          {isShown.eMoney && (
            <motion.div
              className="checkout-form__even-columns"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FormField
                type="number"
                label="e-Money Number"
                name="eMoneyNumber"
                placeholder="214638749"
                errorMessage={state.eMoneyNumber.errorMessage}
                onBlur={handleInputBlur}
              />
              <FormField
                type="number"
                label="e-Money PIN"
                name="eMoneyPin"
                placeholder="5426"
                errorMessage={state.eMoneyPin.errorMessage}
                onBlur={handleInputBlur}
              />
            </motion.div>
          )}
        </FormSection>
      </div>

      <CheckoutSummary />
    </form>
  );
};

export default CheckoutForm;
