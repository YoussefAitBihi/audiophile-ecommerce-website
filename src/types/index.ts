import { ReactNode } from "react";

export interface PictureDescriptor {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
}

export interface ProductDescriptor {
  id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  isNew: boolean;
  features: string;
  categoryId: string;
}

export interface ProductMainDetailDescriptor extends ProductDescriptor {
  picture: PictureDescriptor;
}

export interface ProductsPreviewByCategoryDescriptor {
  name: string;
  products: ProductMainDetailDescriptor[];
}

export type AccessoryDescriptor = {
  id: string;
  title: string;
  quantity: number;
};

export type SuggestionProductItemDescriptor = {
  title: string;
  picture: PictureDescriptor;
  slug: string;
};

export type ProductDetailPageDescriptor = {
  productMainDetail: ProductMainDetailDescriptor;
  accessories: AccessoryDescriptor[];
  suggestionProducts: SuggestionProductItemDescriptor[];
  gallery: PictureDescriptor[];
};

export type NavLinkProps = {
  title: string;
  imageURL: string;
  href: string;
  alt: string;
};

export type LoaderDefinition = {
  params: {
    slug: string;
  };
};

export type PrimaryButtonProps = {
  tag: "button" | "link";
  children: ReactNode;
  href?: string;
  modifier: "orange" | "white";
};

export type HamburgerButtonProps = {
  mobileNavigationIsShown: boolean;
  onClick: () => void;
};

export type UIStateDescriptor = {
  mobileNavigationIsShown: boolean;
};

export type AppWideStateDescriptor = {
  ui: UIStateDescriptor;
};
