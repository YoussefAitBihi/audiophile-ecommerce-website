import { FC } from "react";
import Picture from "@/components/UI/Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";
import { ProductPreviewDescriptor } from "@/types";

const ProductPreview: FC<ProductPreviewDescriptor> = (product) => {
  return (
    <article className="product-item">
      <Picture {...product.previewPicture} />
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

export default ProductPreview;
