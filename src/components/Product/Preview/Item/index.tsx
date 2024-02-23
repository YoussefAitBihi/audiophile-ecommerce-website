import { FC } from "react";
import Picture from "@/components/UI/Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";
import { ProductMainDetailDescriptor } from "@/types";
import ProductPreviewModal from "../Modal";
import useProductPreviewModal from "@/hooks/useProductPreviewModal";
import SpinnerLoading from "@/components/UI/SpinnerLoading";

const ProductPreview: FC<{ product: ProductMainDetailDescriptor; index: number }> = ({
  product,
  index,
}) => {
  const { productPreviewModalState, showProductPreviewModal, hideProductPreviewModal } =
    useProductPreviewModal(product.id);

  return (
    <>
      {productPreviewModalState.isLoading && <SpinnerLoading />}
      {productPreviewModalState.productPreviewIsShown && !productPreviewModalState.isLoading && (
        <ProductPreviewModal
          onClose={hideProductPreviewModal}
          productDetail={product}
          slides={productPreviewModalState.items}
        />
      )}
      <article
        className={`product-item | even-columns ${
          index % 2 === 1 ? "even-columns--content-first" : ""
        }`}
      >
        <div className="product-item__picture">
          <button
            aria-expanded={productPreviewModalState.productPreviewIsShown}
            aria-controls="product-preview-item-modal"
            onClick={showProductPreviewModal}
          >
            <Picture {...product.picture} alt={product.title} />
            <div className="product-item__more-images">
              <span className="visually-hidden">Click to show the product preview modal</span>
              <p>More images</p>
            </div>
          </button>
        </div>
        <div className="product-detail-grid product-detail-grid--centered">
          <div>
            {product.isNew && <p className="new-product-text">new product</p>}
            <h2 className="secondary-heading">{product.title}</h2>
          </div>
          <p>{product.description}</p>
          <PrimaryButton tag="link" href={`/product/${product.slug}`} modifier="orange">
            see product
          </PrimaryButton>
        </div>
      </article>
    </>
  );
};

export default ProductPreview;
