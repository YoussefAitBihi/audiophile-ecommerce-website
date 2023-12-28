import { NavLink } from "react-router-dom";
import { handleActiveLink } from "@/helpers";

const PrimaryNavigation = () => {
  return (
    <nav className="primary-navigation" id="primary-navigation" aria-label="Primary">
      <ul className="primary-navigation__list" role="list">
        <li className="">
          <NavLink className={handleActiveLink} to="/">
            home
          </NavLink>
        </li>
        <li className="primary-navigation__item">
          <NavLink className={handleActiveLink} to="/category/headphones">
            headphones
          </NavLink>
        </li>
        <li className="primary-navigation__item">
          <NavLink className={handleActiveLink} to="/category/speakers">
            speakers
          </NavLink>
        </li>
        <li className="primary-navigation__item">
          <NavLink className={handleActiveLink} to="/category/earphones">
            earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
