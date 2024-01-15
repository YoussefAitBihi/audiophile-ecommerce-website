const ProductPreviewSkeleton = () => {
  return (
    <div className="product-preview-skeleton">
      <div className="container">
        <div className="product-preview-skeleton__wrapper">
          <div className="product-preview-skeleton__picture skeleton"></div>
          <div className="product-preview-skeleton__detail">
            <div className="product-preview-skeleton__title skeleton"></div>
            <div className="product-preview-skeleton__description">
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
            </div>
            <div className="product-preview-skeleton__button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewSkeleton;
