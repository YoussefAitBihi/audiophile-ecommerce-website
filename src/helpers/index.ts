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
