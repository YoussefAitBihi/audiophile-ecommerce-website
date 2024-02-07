import { PrimaryButtonProps } from "@/types";
import { FC } from "react";
import { Link } from "react-router-dom";

const PrimaryButton: FC<PrimaryButtonProps> = ({ tag, children, href, modifier, disabled }) => {
  let primaryButtonContent = (
    <button className={`primary-button primary-button--${modifier}`} aria-disabled={disabled}>
      {children}
    </button>
  );

  if (tag === "link" && href) {
    primaryButtonContent = (
      <Link
        to={href}
        className={`primary-button primary-button--${modifier}`}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return primaryButtonContent;
};

export default PrimaryButton;
