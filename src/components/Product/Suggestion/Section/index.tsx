import { SuggestionProductItemDescriptor } from "@/types";
import SuggestionProductsList from "../List";

const SectionProductsSuggestion = ({
  products,
}: {
  products: SuggestionProductItemDescriptor[];
}) => {
  return (
    <section className="section-products-suggestion" aria-labelledby="products-suggestion-title">
      <h2
        className="section-products-suggestion__title tertiary-heading"
        id="products-suggestion-title"
      >
        you may also like
      </h2>
      <SuggestionProductsList products={products} />
    </section>
  );
};

export default SectionProductsSuggestion;
