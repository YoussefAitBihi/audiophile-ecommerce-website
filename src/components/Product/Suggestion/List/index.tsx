import { SuggestionProductItemDescriptor } from "@/types";
import { FC } from "react";
import SuggestionProductItem from "../Item";

const SuggestionProductsList: FC<{ products: SuggestionProductItemDescriptor[] }> = ({
  products,
}) => {
  return (
    <ul className="suggestion-products" role="list">
      {products.map((product, index) => (
        <SuggestionProductItem {...product} key={index} />
      ))}
    </ul>
  );
};

export default SuggestionProductsList;
