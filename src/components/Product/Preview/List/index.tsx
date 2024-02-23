import { ProductMainDetailDescriptor } from "@/types";
import { FC } from "react";
import ProductPreview from "../Item";

const ProductsList: FC<{ products: ProductMainDetailDescriptor[] }> = ({ products }) => {
  const lastProduct = products.slice(-1).pop();

  return (
    <ul className="product-preview-list" role="list">
      {products.map((product, index) => (
        <li
          className={`product-preview-list__item ${
            lastProduct !== product ? "fluid-margin-400" : ""
          }`}
          key={product.id}
        >
          <ProductPreview product={product} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
