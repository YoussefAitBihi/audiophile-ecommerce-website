/**
 * Allow to change the color of a link when it's active
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
 * @param text a string which you want to slugify it
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
