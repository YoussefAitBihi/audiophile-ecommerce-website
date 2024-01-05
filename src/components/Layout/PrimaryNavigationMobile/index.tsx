import NavLink from "@/components/Layout/NavLink";
import { navLinks } from "@/data";
import { uiActions } from "@/store/slices/ui-slice";
import { useDispatch } from "react-redux";

const PrimaryNavigationMobile = () => {
  const dispatch = useDispatch();

  const hideNavigationHandler = () => {
    dispatch(uiActions.toggleMobileNavigation());
  };

  return (
    <nav
      className="primary-navigation-mobile backdrop-400"
      aria-label="Primary Mobile"
      onClick={hideNavigationHandler}
    >
      <ul
        className="primary-navigation-mobile__list"
        id="primary-navigation-mobile"
        role="list"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="container">
          <div className="primary-navigation-mobile__list-wrapper">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink {...link} />
              </li>
            ))}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default PrimaryNavigationMobile;
