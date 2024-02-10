import NavLink from "@/components/Layout/NavLink";
import { navLinks } from "@/data";
import { uiActions } from "@/store/slices/ui-slice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const PrimaryNavigationMobile = () => {
  const dispatch = useDispatch();

  const hideNavigationHandler = () => {
    dispatch(uiActions.toggleMobileNavigation());
  };

  return (
    <motion.nav
      className="primary-navigation-mobile backdrop-400"
      aria-label="Primary Mobile"
      onClick={hideNavigationHandler}
      variants={{
        show: { opacity: 1, y: 0 },
        hide: { opacity: 0, y: -20 },
      }}
      initial="hide"
      animate="show"
      transition={{ duration: 0.2 }}
      exit="hide"
    >
      <ul
        className="primary-navigation-mobile__list"
        id="primary-navigation-mobile"
        role="list"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="container">
          <div className="categories-grid">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink {...link} />
              </li>
            ))}
          </div>
        </div>
      </ul>
    </motion.nav>
  );
};

export default PrimaryNavigationMobile;
