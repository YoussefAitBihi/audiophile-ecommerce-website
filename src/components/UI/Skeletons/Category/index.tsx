import ProductSkeleton from "../Product";

const CategorySkeleton = () => {
  return (
    <>
      <header className="category-skeleton__header category-header fluid-margin-400">
        <h1 className="skeleton"></h1>
      </header>
      <div className="container">
        <ProductSkeleton />
      </div>
    </>
  );
};

export default CategorySkeleton;
