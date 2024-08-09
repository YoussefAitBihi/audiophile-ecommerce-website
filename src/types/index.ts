import { FocusEvent, ReactNode } from "react";

export interface PictureDescriptor {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
}

export interface ProductDescriptor {
  id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  isNew: boolean;
  features: string;
  categoryId: string;
}

export interface ProductMainDetailDescriptor extends ProductDescriptor {
  picture: PictureDescriptor;
}

export interface ProductsPreviewByCategoryDescriptor {
  name: string;
  products: ProductMainDetailDescriptor[];
}

export interface ProductGalleryCartPreviewProps {
  gallery: PictureDescriptor[];
  productItem: ProductMainDetailDescriptor;
}

export interface AccessoryDescriptor {
  id: string;
  title: string;
  quantity: number;
}

export type SuggestionProductItemDescriptor = {
  title: string;
  picture: PictureDescriptor;
  slug: string;
};

export type ProductDetailPageDescriptor = {
  productMainDetail: ProductMainDetailDescriptor;
  accessories: AccessoryDescriptor[];
  suggestionProducts: SuggestionProductItemDescriptor[];
  gallery: PictureDescriptor[];
};

export type NavLinkProps = {
  title: string;
  imageURL: string;
  href: string;
  alt: string;
};

export type LoaderDefinition = {
  params: {
    slug: string;
  };
};

export type PrimaryButtonProps = {
  tag: "button" | "link";
  children: ReactNode;
  href?: string;
  modifier: "orange" | "white";
  disabled?: boolean;
};

export type HamburgerButtonProps = {
  mobileNavigationIsShown: boolean;
  onClick: () => void;
};

export type UIStateDescriptor = {
  mobileNavigationIsShown: boolean;
  cartModalIsShown: boolean;
  notificationIsShown: boolean;
  checkoutOrderModalIsShown: boolean;
};

export type AppWideStateDescriptor = {
  ui: UIStateDescriptor;
  cart: CartStateDescriptor;
};

export type CartItemDescriptor = {
  id: string;
  title: string;
  abbreviatedTitle: string;
  price: number;
  picture: string;
  quantity: number;
};

export type CartStateDescriptor = {
  items: CartItemDescriptor[];
  totalQuantity: number;
  totalAmount: number;
};

export type InputType = "text" | "number" | "tel" | "email" | "radio";

export type FormFieldProps = {
  type: InputType;
  label: string;
  placeholder?: string;
  name: string;
  defaultValue?: string;
  defaultChecked?: boolean;
  errorMessage: string | null;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
};

export type FormCheckoutState = {
  name: {
    value: string;
    errorMessage: string | null;
  };
  email: {
    value: string;
    errorMessage: string | null;
  };
  phone: {
    value: string;
    errorMessage: string | null;
  };
  address: {
    value: string;
    errorMessage: string | null;
  };
  zip: {
    value: string;
    errorMessage: string | null;
  };
  city: {
    value: string;
    errorMessage: string | null;
  };
  country: {
    value: string;
    errorMessage: string | null;
  };
  payment: {
    value: string;
    errorMessage: string | null;
  };
  eMoneyNumber: {
    value: string;
    errorMessage: string | null;
  };
  eMoneyPin: {
    value: string;
    errorMessage: string | null;
  };
  formIsValid: boolean;
};

export type FormCheckoutAction = {
  type: "INPUT_BLUR" | "FORM_SUBMIT";
  payload: {
    type: string;
    name: string;
    value: string;
  };
};
