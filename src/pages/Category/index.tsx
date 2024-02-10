import ProductList from "@/components/Product/List";
import CategorySkeleton from "@/components/UI/Skeletons/Category";
import { ProductsPreviewByCategoryDescriptor } from "@/types";
import { useLoaderData, useNavigation } from "react-router-dom";

const CategoryPage = () => {
  const category = useLoaderData() as ProductsPreviewByCategoryDescriptor;

  const { state } = useNavigation();

  if (state === "loading") {
    return <CategorySkeleton />;
  }

  return (
    <>
      <header className="category-header fluid-margin-400">
        <h1 className="secondary-heading secondary-heading--category">{category.name}</h1>
      </header>
      <section
        className="section-products-preview fluid-margin-400"
        aria-labelledby="section-products-preview-title"
      >
        <div className="container">
          <div className="section-products-preview__content">
            <h2 className="visually-hidden" id="section-products-preview-title">
              Products preview for {category.name} category
            </h2>
            <ProductList products={category.products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
