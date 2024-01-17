import { FC } from "react";
import Picture from "@/components/UI/Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";
import { ProductPreviewDescriptor } from "@/types";

const ProductPreview: FC<{ product: ProductPreviewDescriptor; index: number }> = ({
  product,
  index,
}) => {
  return (
    <article
      className={`product-preview-item | product-grid ${
        index % 2 === 0 ? "product-grid--picture-first" : ""
      }`}
    >
      <div className="product-detail-grid">
        <div>
          {product.isNew && <p className="new-product-text">new product</p>}
          <h2 className="secondary-heading">{product.title}</h2>
        </div>
        <p>{product.description}</p>
        <PrimaryButton tag="link" href={`/product/${product.slug}`} modifier="orange">
          see product
        </PrimaryButton>
      </div>
      <Picture {...product.previewImages} />
    </article>
  );
};

export default ProductPreview;
