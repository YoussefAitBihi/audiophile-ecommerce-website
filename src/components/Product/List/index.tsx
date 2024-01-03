import { PictureProps, ProductItemProps } from "@/types/props";
import { FC } from "react";

const ProductList: FC<{ products: ProductItemProps[]; images: PictureProps[] }> = (
  products,
  images
) => {
  return (
    <ul className="product-list" role="list">
      {products.map()}
    </ul>
  );
};

export default ProductList;
