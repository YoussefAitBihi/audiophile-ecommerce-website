import supabase from "@/config/supabase-client";
import { LoaderDefinition } from "@/types";
import { json } from "react-router-dom";

type ProductImage = {
  id: string;
  desktop: string;
  mobile: string;
  tablet: string;
  product_id: string;
};

type Accessory = {
  id: string;
  title: string;
  quantity: string;
  product_id: string;
};

type ProductDetail = {
  id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  is_new: boolean;
  features: string;
  category_id: string;
  "product-images": Array<ProductImage>;
  gallery: ProductImage[];
  accessory: Accessory[];
};

const productDetailLoader = async ({ params }: LoaderDefinition) => {
  const { data, error } = await supabase
    .from("product")
    .select(`*, "product-images"(*), gallery(*), accessory(*)`)
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    throw json(
      {
        title: "Product not found",
        message: "We're unable to get this product. Try to navigate to get available products",
      },
      { status: 404 }
    );
  }

  const productDetail = data as ProductDetail;

  const { data: otherProducts, error: otherProductsError } = await supabase
    .from("product")
    .select(`id, title, slug, "product-preview-images"(*)`)
    .neq("slug", params.slug)
    .limit(3);

  console.log(otherProducts);

  if (otherProductsError || otherProducts.length === 0) {
    throw json({ title: "Error", message: "Error Message" });
  }

  const transformedSuggestionProducts = [];

  for (const product of otherProducts!) {
    const transformedProduct = {
      title: product.title,
      picture: product["product-preview-images"],
      slug: product.slug,
    };

    transformedSuggestionProducts.push(transformedProduct);
  }

  const productDetailAndFascinatedProducts = {
    productMainDetail: {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      description: productDetail.description,
      slug: productDetail.slug,
      features: productDetail.features,
      isNew: productDetail.is_new,
      picture: productDetail["product-images"][0],
    },
    accessories: [...productDetail.accessory],
    gallery: [...productDetail.gallery],
    suggestionProducts: transformedSuggestionProducts,
  };

  return productDetailAndFascinatedProducts;
};

export default productDetailLoader;
