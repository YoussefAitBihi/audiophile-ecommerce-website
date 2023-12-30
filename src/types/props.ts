import { ReactNode } from "react";

export type PictureProps = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
};

export type ProductItemProps = {
  id: string;
  title: string;
  description: string;
  picture: PictureProps;
  slug: string;
  isNew: boolean;
};

export type NavLinkProps = {
  title: string;
  imageURL: string;
  href: string;
  alt: string;
};

export type PrimaryButtonProps = {
  tag: "button" | "link";
  children: ReactNode;
  href: string;
  modifier: "orange" | "white";
};
