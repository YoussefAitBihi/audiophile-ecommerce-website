import { CartStateDescriptor } from "@/types";

/**
 * Allow to change the color of a link when it's active
 *
 * @param isActive a parameter passes via React Router DOM
 * @returns
 */
export const handleActiveLink = ({ isActive }: { isActive: boolean }) => {
  const classesLink = isActive
    ? "primary-navigation__link primary-navigation__link--active"
    : "primary-navigation__link";

  return classesLink;
};

/**
 * Slugify a text
 *
 * @param text a string which you want to slugify it
 *
 * @returns
 */
export const slugify = (text: string) => {
  const textLowerCase = text.toLowerCase().trim();

  if (textLowerCase.indexOf(" ") === -1) return textLowerCase;

  const slugifiedText = textLowerCase.replace(/ /g, "-");

  return slugifiedText;
};

/**
 * Allow to format the price
 *
 * @param price
 * @returns
 */
export const formatPrice = (price: number) => {
  const formattedPrice = Intl.NumberFormat(navigator.languages[0], {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);

  return formattedPrice;
};

/**
 * Save Cart items to Local Storage
 * @param cart
 */
export const saveCartToLocalStorage = (cart: CartStateDescriptor) => {
  // if (!cart.items.length) return;

  const serializedCart = JSON.stringify(cart);

  localStorage.setItem("cart", serializedCart);
};

/**
 * Load Cart items from Local Storage
 * @returns
 */
export const loadCartFromLocalStorage = (): CartStateDescriptor | undefined => {
  const cart = localStorage.getItem("cart");

  if (!cart) return;

  const deserializedCart = JSON.parse(cart);

  return deserializedCart;
};

export const clearCartFromLocalStorage = () => {
  try {
    localStorage.removeItem("cart");
  } catch (error) {
    console.log(error);
  }
};
