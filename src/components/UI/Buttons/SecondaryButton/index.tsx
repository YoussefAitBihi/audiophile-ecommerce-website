import { Link } from "react-router-dom";
import ArrowRightIcon from "@/assets/icons/ArrowRight";

const SecondaryButton = ({ href }: { href: string }) => {
  return (
    <Link to={href} className="secondary-button">
      shop <ArrowRightIcon />
    </Link>
  );
};

export default SecondaryButton;
