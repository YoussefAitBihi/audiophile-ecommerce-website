import { PictureDescriptor } from "@/types";
import { FC } from "react";

const Picture: FC<PictureDescriptor> = ({ desktop, tablet, mobile, alt }) => {
  return (
    <picture>
      <source media="(min-width: 60em)" srcSet={desktop} />
      <source media="(min-width: 48em)" srcSet={tablet} />
      <source srcSet={mobile} />
      <img src={desktop} alt={alt} className="border-radius-300" loading="lazy" />
    </picture>
  );
};

export default Picture;
