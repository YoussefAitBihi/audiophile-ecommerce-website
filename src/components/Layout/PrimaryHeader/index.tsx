import PrimaryNavigation from "../PrimaryNavigation";
import Cart from "@/components/Cart";
import HamburgerButton from "@/components/UI/Buttons/Hamburger";
import PrimaryNavigationMobile from "../PrimaryNavigationMobile";
import { useLocation } from "react-router-dom";
import Logo from "@/components/UI/Links/Logo";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/slices/ui-slice";
import { AppWideStateDescriptor } from "@/types";

const PrimaryHeader = () => {
  const { pathname } = useLocation();
  const pattern = /\/category\/[a-z]+/;

  const { mobileNavigationIsShown } = useSelector((state: AppWideStateDescriptor) => state.ui);

  const dispatch = useDispatch();

  const handleToggleNavigation = () => {
    dispatch(uiActions.toggleMobileNavigation());
  };

  return (
    <header className={`primary-header ${pattern.test(pathname) ? "primary-header--black" : ""}`}>
      <div className="container">
        <div className="primary-header__nav-wrapper">
          <Logo className="primary-header__logo" />
          <HamburgerButton
            mobileNavigationIsShown={mobileNavigationIsShown}
            onClick={handleToggleNavigation}
          />
          <PrimaryNavigationMobile />
          <PrimaryNavigation modifierClass="primary-navigation--header" />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default PrimaryHeader;
