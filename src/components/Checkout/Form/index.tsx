import FormField from "@/components/UI/Form/Field";
import FormSection from "@/components/UI/Form/Section";
import CheckoutSummary from "../Summary";

const CheckoutForm = () => {
  return (
    <form className="checkout-form">
      <div className="checkout-form__form-fields">
        <h1 className="quaternary-heading">Checkout</h1>
        <FormSection title="billing details">
          <div className="checkout-form__even-columns">
            <FormField type="text" label="name" placeholder="Youssef Ait Bihi" name="name" />
            <FormField
              type="email"
              label="email address"
              placeholder="youssefaitbihi@gmail.com"
              name="email"
            />
          </div>
          <FormField type="tel" label="Phone number" placeholder="+212-6148-43563" name="phone" />
        </FormSection>

        <FormSection title="shipping info">
          <FormField type="text" label="address" placeholder="1137 Mohamed IV" name="address" />
          <div className="checkout-form__even-columns">
            <FormField type="number" label="zip code" placeholder="20440" name="zip" />
            <FormField type="text" label="city" placeholder="Casablanca" name="city" />
          </div>
          <FormField type="text" label="country" placeholder="Morocco" name="country" />
        </FormSection>

        <FormSection title="payment details">
          <div className="checkout-form__even-columns">
            <p className="form-field__label">Payment method</p>
            <div>
              <FormField
                type="radio"
                label="e-Money"
                defaultValue="e-money"
                name="payment"
                checked={true}
              />
              <FormField
                type="radio"
                label="cash on delivery"
                defaultValue="cash-on-delivery"
                name="payment"
              />
            </div>
          </div>
          <div className="checkout-form__even-columns">
            <FormField
              type="number"
              label="e-Money Number"
              name="eMoneyNumber"
              placeholder="214638749"
            />
            <FormField type="number" label="e-Money PIN" name="eMoneyPin" placeholder="5426" />
          </div>
        </FormSection>
      </div>

      <CheckoutSummary />
    </form>
  );
};

export default CheckoutForm;
