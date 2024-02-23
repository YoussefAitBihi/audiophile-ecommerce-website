import Picture from "@/components/UI/Picture";
import { ProductMainDetailDescriptor } from "@/types";
import { FC } from "react";
import AddProductToCart from "../AddProductToCartForm";
import { formatPrice } from "@/helpers";

const ProductMainDetail: FC<ProductMainDetailDescriptor> = (product) => {
  const price = formatPrice(product.price);
  const cartItem = {
    id: product.id,
    title: product.title,
    abbreviatedTitle: product.title.split(" ").shift()!,
    price: product.price,
    picture: product.picture.mobile,
    quantity: 0,
  };

  return (
    <section
      className="section-product-main-detail fluid-margin-400"
      aria-labelledby="product-main-detail-title"
    >
      <Picture {...product.picture} />
      <div className="product-detail-grid">
        <div>
          {product.isNew && <p className="new-product-text">new product</p>}
          <h1 className="secondary-heading" id="product-main-detail-title">
            {product.title}
          </h1>
        </div>
        <p>{product.description}</p>
        <p className="section-product-main-detail__price">
          <span className="visually-hidden">{`The ${product.title} price is:`}</span>
          {price}
        </p>
        <AddProductToCart cartItem={cartItem} />
      </div>
    </section>
  );
};

export default ProductMainDetail;
