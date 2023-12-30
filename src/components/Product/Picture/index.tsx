import { PictureProps } from "@/types/props";
import { FC } from "react";

const ProductPicture: FC<PictureProps> = ({ desktop, tablet, mobile, alt }) => {
  return (
    <picture>
      <source media="(min-width: 80em)" srcSet={desktop} />
      <source media="(min-width: 48em)" srcSet={tablet} />
      <source srcSet={mobile} />
      <img src={desktop} alt={alt} />
    </picture>
  );
};

export default ProductPicture;
