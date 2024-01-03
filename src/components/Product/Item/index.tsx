import { ProductItemProps } from "@/types/props";
import { FC } from "react";
import ProductPicture from "../Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";

const ProductItem: FC<ProductItemProps> = (product) => {
  return (
    <article className="product-item">
      <ProductPicture {...product} alt={`${product.title} picture`} />
      <div className="product-detail-grid">
        <div>
          <p className="new-product-text">new product</p>
          <h2 className="secondary-heading">{product.title}</h2>
        </div>
        <p>{product.description}</p>
        <PrimaryButton tag="link" href={`/product/${product.slug}`} modifier="orange">
          see product
        </PrimaryButton>
      </div>
    </article>
  );
};

export default ProductItem;
