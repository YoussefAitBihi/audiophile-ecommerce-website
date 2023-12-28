import HamburgerIcon from "@/assets/icons/Hamburger";

const HamburgerButton = () => {
  return (
    <button
      className="hamburger-button"
      aria-controls="primary-navigation-mobile"
      aria-expanded="false"
    >
      <HamburgerIcon />
      <span className="visually-hidden">Click to open the navigation</span>
    </button>
  );
};

export default HamburgerButton;
