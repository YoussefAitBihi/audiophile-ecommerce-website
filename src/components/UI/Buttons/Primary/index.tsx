import { PrimaryButtonProps } from "@/types";
import { FC } from "react";
import { Link } from "react-router-dom";

const PrimaryButton: FC<PrimaryButtonProps> = ({ tag, children, href, modifier }) => {
  let primaryButtonContent = (
    <button className={`primary-button primary-button--${modifier}`}>{children}</button>
  );

  if (tag === "link") {
    primaryButtonContent = (
      <Link to={href} className={`primary-button primary-button--${modifier}`}>
        {children}
      </Link>
    );
  }

  return primaryButtonContent;
};

export default PrimaryButton;
