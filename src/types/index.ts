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
  categoryId: string;
}

export interface ProductMainDetailDescriptor extends ProductDescriptor {
  picture: PictureDescriptor;
}

export interface ProductsPreviewByCategoryDescriptor {
  name: string;
  products: ProductMainDetailDescriptor[];
}

export type SuggestionProductItemDescriptor = {
  title: string;
  picture: PictureDescriptor;
  slug: string;
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
