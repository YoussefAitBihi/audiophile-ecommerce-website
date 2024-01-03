import PrimaryNavigation from "../PrimaryNavigation";
import Cart from "@/components/Cart";
import HamburgerButton from "@/components/UI/Buttons/Hamburger";
import PrimaryNavigationMobile from "../PrimaryNavigationMobile";
import { useLocation } from "react-router-dom";
import Logo from "@/components/UI/Links/Logo";

const PrimaryHeader = () => {
  const { pathname } = useLocation();
  const pattern = /\/category\/[a-z]+/;

  return (
    <header className={`primary-header ${pattern.test(pathname) ? "primary-header--black" : ""}`}>
      <div className="container">
        <div className="primary-header__nav-wrapper">
          <Logo className="primary-header__logo" />
          <HamburgerButton />
          <PrimaryNavigationMobile />
          <PrimaryNavigation modifierClass="primary-navigation--header" />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default PrimaryHeader;
