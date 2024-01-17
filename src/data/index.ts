import { slugify } from "@/helpers";

export const navLinks = [
  {
    title: "headphones",
    imageURL: "/src/assets/images/shared/desktop/image-category-thumbnail-headphones.png",
    href: "/category/headphones",
    alt: "Headphone",
  },
  {
    title: "speakers",
    imageURL: "/src/assets/images/shared/desktop/image-category-thumbnail-speakers.png",
    href: "/category/speakers",
    alt: "Speaker",
  },
  {
    title: "earphones",
    imageURL: "/src/assets/images/shared/desktop/image-category-thumbnail-earphones.png",
    href: "/category/earphones",
    alt: "Earphone",
  },
];

export const categories = [
  {
    title: "headphones",
    description: "This is the headphone category",
    slug: (function () {
      return slugify("headphones");
    })(),
  },
  {
    title: "speakers",
    description: "This is the speaker category",
    slug: (function () {
      return slugify("speakers");
    })(),
  },
  {
    title: "earphones",
    description: "This is the earphone category",
    slug: (function () {
      return slugify("earphones");
    })(),
  },
];

export const products = [
  {
    title: "XX59 Headphones",
    description: null,
    price: null,
    slug: null,
    is_new: null,
    features: null,
  },
  {
    title: "XX99 Mark I Headphones",
    description: null,
    price: null,
    slug: null,
    is_new: null,
    features: null,
  },
  {
    title: "XX99 Mark II Headphones",
    description: null,
    price: null,
    slug: null,
    is_new: null,
    features: null,
  },
  {
    title: "ZX7 SPEAKER",
    description: null,
    price: null,
    slug: null,
    is_new: null,
    features: null,
  },
  {
    title: "ZX9 SPEAKER",
    description: null,
    price: null,
    slug: null,
    is_new: null,
    features: null,
  },
  {
    title: "YX1 WIRELESS EARPHONES",
    description: null,
    price: null,
    slug: null,
    is_new: null,
    features: null,
  },
];

export const productPreviewImages = [
  {
    desktop: "/src/assets/images/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    tablet: "/src/assets/images/product-xx59-headphones/tablet/image-category-page-preview.jpg",
    mobile: "/src/assets/images/product-xx59-headphones/mobile/image-category-page-preview.jpg",
    alt: "XX59 Headphones",
  },
  {
    desktop:
      "/src/assets/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
    tablet:
      "/src/assets/images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
    mobile:
      "/src/assets/images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
    alt: "XX99 Mark I Headphones",
  },
  {
    desktop:
      "/src/assets/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
    tablet:
      "/src/assets/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
    mobile:
      "/src/assets/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
    alt: "XX99 Mark II Headphones",
  },
  {
    desktop: "/src/assets/images/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    tablet: "/src/assets/images/product-yx1-earphones/tablet/image-category-page-preview.jpg",
    mobile: "/src/assets/images/product-yx1-earphones/mobile/image-category-page-preview.jpg",
    alt: "YX1 WIRELESS EARPHONES",
  },
  {
    desktop: "/src/assets/images/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    tablet: "/src/assets/images/product-zx7-speaker/tablet/image-category-page-preview.jpg",
    mobile: "/src/assets/images/product-zx7-speaker/mobile/image-category-page-preview.jpg",
    alt: "ZX7 SPEAKER",
  },
  {
    desktop: "/src/assets/images/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    tablet: "/src/assets/images/product-zx9-speaker/tablet/image-category-page-preview.jpg",
    mobile: "/src/assets/images/product-zx9-speaker/mobile/image-category-page-preview.jpg",
    alt: "ZX9 SPEAKER",
  },
];

export const productImage = [
  {
    id: "pro-img-1",
    desktop: "./src/assets/images/product-xx59-headphones/desktop/image-product.jpg",
    tablet: "./src/assets/images/product-xx59-headphones/tablet/image-product.jpg",
    mobile: "./src/assets/images/product-xx59-headphones/mobile/image-product.jpg",
    productId: "pro-1",
  },
];

export const galleries = [
  {
    id: "gal-1",
    desktop: "./src/assets/images/product-xx59-headphones/desktop/image-gallery-1.jpg",
    tablet: "./src/assets/images/product-xx59-headphones/tablet/image-gallery-1.jpg",
    mobile: "./src/assets/images/product-xx59-headphones/mobile/image-gallery-1.jpg",
    productId: "pro-1",
  },
  {
    id: "gal-2",
    desktop: "./src/assets/images/product-xx59-headphones/desktop/image-gallery-2.jpg",
    tablet: "./src/assets/images/product-xx59-headphones/tablet/image-gallery-2.jpg",
    mobile: "./src/assets/images/product-xx59-headphones/mobile/image-gallery-2.jpg",
    productId: "pro-1",
  },
  {
    id: "gal-3",
    desktop: "./src/assets/images/product-xx59-headphones/desktop/image-gallery-3.jpg",
    tablet: "./src/assets/images/product-xx59-headphones/tablet/image-gallery-3.jpg",
    mobile: "./src/assets/images/product-xx59-headphones/mobile/image-gallery-3.jpg",
    productId: "pro-1",
  },
];

export const accessoriesProduct = [
  {
    id: "inc-1",
    "headphone-unit": 1,
    "replacement-earcups": 2,
    "user-manual": 1,
    "3.5mm-5m-audio-cable": 1,
    productId: "pro-1",
  },
];
