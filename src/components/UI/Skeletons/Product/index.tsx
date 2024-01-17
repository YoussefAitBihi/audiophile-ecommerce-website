const ProductSkeleton = () => {
  return (
    <div className="product-skeleton">
      <div className="product-skeleton__picture skeleton"></div>
      <div className="product-skeleton__detail">
        <div className="product-skeleton__title skeleton"></div>
        <div className="product-skeleton__description">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="product-skeleton__button"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
