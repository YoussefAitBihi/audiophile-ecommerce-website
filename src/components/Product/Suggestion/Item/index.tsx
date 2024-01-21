import PrimaryButton from "@/components/UI/Buttons/Primary";
import Picture from "@/components/UI/Picture";
import { SuggestionProductItemDescriptor } from "@/types";
import { FC } from "react";

const SuggestionProductItem: FC<SuggestionProductItemDescriptor> = ({ title, picture, slug }) => {
  return (
    <li className="suggestion-product-item">
      <Picture {...picture} alt={title} />
      <h3>{title}</h3>
      <PrimaryButton tag="link" href={`/product/${slug}`} modifier="orange">
        see product
      </PrimaryButton>
    </li>
  );
};

export default SuggestionProductItem;
