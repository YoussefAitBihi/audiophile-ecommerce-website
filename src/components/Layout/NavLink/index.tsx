import { Link } from "react-router-dom";
import { FC } from "react";
import { NavLinkProps } from "@/types/props";
import SecondaryButton from "@/components/UI/Buttons/SecondaryButton";

const NavLink: FC<NavLinkProps> = ({ title, imageURL, href, alt }) => {
  return (
    <Link className="nav-link" to={href}>
      <div className="nav-link__picture">
        <img src={imageURL} alt={alt} />
      </div>
      <p className="nav-link__title">{title}</p>
      <SecondaryButton href={href} />
    </Link>
  );
};

export default NavLink;
