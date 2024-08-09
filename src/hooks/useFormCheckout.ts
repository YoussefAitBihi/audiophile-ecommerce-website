import { checkValidityInput } from "@/helpers";
import { FormCheckoutAction, FormCheckoutState, InputType } from "@/types";
import { FocusEvent, FormEvent, useReducer } from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "@/store/slices/ui-slice";

function reducer(state: FormCheckoutState, action: FormCheckoutAction) {
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      [action.payload.name]: {
        value: action.payload.value,
        errorMessage: checkValidityInput(action.payload.type as InputType, action.payload.value),
      },
      formIsValid:
        !state.name.errorMessage &&
        !state.email.errorMessage &&
        !state.phone.errorMessage &&
        !state.address.errorMessage &&
        !state.zip.errorMessage &&
        !state.city.errorMessage &&
        !state.country.errorMessage &&
        !state.eMoneyNumber.errorMessage &&
        !state.eMoneyPin.errorMessage,
    };
  }

  return state;
}

const useFormCheckout = () => {
  const initialState = {
    name: {
      value: "",
      errorMessage: null,
    },
    email: {
      value: "",
      errorMessage: null,
    },
    phone: {
      value: "",
      errorMessage: null,
    },
    address: {
      value: "",
      errorMessage: null,
    },
    zip: {
      value: "",
      errorMessage: null,
    },
    city: {
      value: "",
      errorMessage: null,
    },
    country: {
      value: "",
      errorMessage: null,
    },
    payment: {
      value: "",
      errorMessage: null,
    },
    eMoneyNumber: {
      value: "",
      errorMessage: null,
    },
    eMoneyPin: {
      value: "",
      errorMessage: null,
    },
    formIsValid: false,
  };

  const [state, dispatchReducer] = useReducer(reducer, initialState);

  const dispatchRedux = useDispatch();

  function handleInputBlur(event: FocusEvent<HTMLInputElement>) {
    const { type, name, value } = event.target;

    dispatchReducer({
      type: "INPUT_BLUR",
      payload: {
        type,
        name,
        value,
      },
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!state.formIsValid) return;

    dispatchRedux(uiActions.showCheckoutOrderModal());
  }

  return {
    handleInputBlur,
    handleSubmit,
    state,
  };
};

export default useFormCheckout;
