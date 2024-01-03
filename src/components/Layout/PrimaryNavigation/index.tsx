import { NavLink } from "react-router-dom";
import { handleActiveLink } from "@/helpers";
import { FC } from "react";

type PrimaryNavigationProps = {
  modifierClass?: "primary-navigation--header";
};

/**
 * Primary Navigation
 *
 * @param modifierClass a modifier class consists of showing the navigation only in the desktop mode if the navigation will render in the header component
 * @returns
 */
const PrimaryNavigation: FC<PrimaryNavigationProps> = ({ modifierClass }) => {
  return (
    <nav
      className={`primary-navigation ${modifierClass}`}
      id="primary-navigation"
      aria-label="Primary"
    >
      <ul className="primary-navigation__list" role="list">
        <li className="primary-navigation__item ">
          <NavLink className={handleActiveLink} to="/">
            home
          </NavLink>
        </li>
        <li className="primary-navigation__item">
          <NavLink className={handleActiveLink} to="category/headphones">
            headphones
          </NavLink>
        </li>
        <li className="primary-navigation__item">
          <NavLink className={handleActiveLink} to="category/speakers">
            speakers
          </NavLink>
        </li>
        <li className="primary-navigation__item">
          <NavLink className={handleActiveLink} to="category/earphones">
            earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
