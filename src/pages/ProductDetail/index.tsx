import { ProductDetailPageDescriptor } from "@/types";
import { useLoaderData } from "react-router-dom";

import ProductMainDetail from "@/components/Product/MainDetail";
import SectionProductFeatures from "@/components/Product/Features";
import SectionProductAccessories from "@/components/Product/Accessories";
import SectionProductGallery from "@/components/Product/Gallery";
import SectionProductsSuggestion from "@/components/Product/Suggestion/Section";

const ProductDetailPage = () => {
  const { productMainDetail, accessories, gallery, suggestionProducts } =
    useLoaderData() as ProductDetailPageDescriptor;

  return (
    <article className="article-product-detail">
      <div className="container">
        <div className="article-product-detail__content">
          <ProductMainDetail {...productMainDetail} />
          <SectionProductFeatures features={productMainDetail.features} />
          <SectionProductAccessories accessories={accessories} />
          {/* <SectionProductGallery gallery={gallery} title={productMainDetail.title} />
          <SectionProductsSuggestion products={suggestionProducts} /> */}
        </div>
      </div>
    </article>
  );
};

export default ProductDetailPage;
