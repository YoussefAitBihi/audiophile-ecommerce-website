import LogoIcon from "@/assets/icons/Logo";
import { Link } from "react-router-dom";
import PrimaryNavigation from "../PrimaryNavigation";
import Cart from "@/components/Cart";
import HamburgerButton from "@/components/UI/Buttons/Hamburger";
import PrimaryNavigationMobile from "../PrimaryNavigationMobile";

const PrimaryHeader = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="primary-header__nav-wrapper">
          <Link to="/" className="primary-header__logo">
            <span className="visually-hidden">Website logo</span>
            <LogoIcon />
          </Link>
          <HamburgerButton />
          <PrimaryNavigationMobile />
          <PrimaryNavigation />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default PrimaryHeader;
