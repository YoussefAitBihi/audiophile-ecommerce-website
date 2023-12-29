import NavLink from "@/components/Layout/NavLink";
import Overlay from "@/components/UI/Overlay";
import { navLinks } from "@/data";

const PrimaryNavigationMobile = () => {
  return (
    <>
      <nav
        className="primary-navigation-mobile"
        id="primary-navigation-mobile"
        aria-label="Primary Mobile"
      >
        <Overlay />
        <div className="container">
          <ul role="list" className="primary-navigation-mobile__list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default PrimaryNavigationMobile;
