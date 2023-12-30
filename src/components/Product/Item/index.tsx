import { ProductItemProps } from "@/types/props";
import { FC } from "react";
import ProductPicture from "../Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";

const ProductItem: FC<ProductItemProps> = (product) => {
  return (
    <article className="product-item">
      <ProductPicture {...product.picture} />
      <div className="product-item__details">
        <div className="product-item__header">
          <p>new product</p>
          <h2>{product.title}</h2>
        </div>
        <p>{product.description}</p>
        <PrimaryButton tag="link" href={`/product/${product.slug}`}>
          see product
        </PrimaryButton>
      </div>
    </article>
  );
};

export default ProductItem;
