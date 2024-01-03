import LogoIcon from "@/assets/icons/Logo";
import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC<{ className: string }> = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <span className="visually-hidden">Website logo</span>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
