import HamburgerIcon from "@/assets/icons/Hamburger";
import { HamburgerButtonProps } from "@/types/props";
import { FC } from "react";

const HamburgerButton: FC<HamburgerButtonProps> = ({ mobileNavigationIsShown, onClick }) => {
  const visuallyHiddenText = `Click to ${
    !mobileNavigationIsShown ? "open" : "close"
  } the navigation`;

  return (
    <button
      className="hamburger-button"
      aria-controls="primary-navigation-mobile"
      aria-expanded={mobileNavigationIsShown}
      onClick={onClick}
    >
      <HamburgerIcon />
      <span className="visually-hidden">{visuallyHiddenText}</span>
    </button>
  );
};

export default HamburgerButton;
