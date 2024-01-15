import { navLinks } from "@/data";
import NavLink from "@/components/Layout/NavLink";

export default function SectionCategory() {
  return (
    <section
      className="section-category section-fluid-margin"
      aria-labelledby="section-category-title"
    >
      <div className="container">
        <div className="section-category__wrapper">
          <h2 className="visually-hidden" id="section-category-title">
            All Categories
          </h2>
          <ul role="list" className="categories-grid">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
