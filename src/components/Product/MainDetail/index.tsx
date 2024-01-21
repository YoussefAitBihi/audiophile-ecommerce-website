import Picture from "@/components/UI/Picture";
import { ProductMainDetailDescriptor } from "@/types";
import { FC } from "react";
import AddProductToCart from "../AddProductToCartForm";

const ProductMainDetail: FC<ProductMainDetailDescriptor> = (product) => {
  return (
    <section className="section-product-main-detail" aria-labelledby="product-main-detail-title">
      <Picture {...product.picture} />
      <div className="product-detail-grid">
        {product.isNew && <p className="new-product-text">new product</p>}
        <h1 className="secondary-heading" id="product-main-detail-title">
          {product.title}
        </h1>
        <p>{product.description}</p>
        <p className="section-product-main-detail__price">{product.price}</p>
        <AddProductToCart />
      </div>
    </section>
  );
};

export default ProductMainDetail;
