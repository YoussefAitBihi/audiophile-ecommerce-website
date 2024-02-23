import supabase from "@/config/supabase-client";
import { LoaderDefinition } from "@/types";
import { json } from "react-router-dom";

const productDetailLoader = async ({ params }: LoaderDefinition) => {
  const { data: productDetail, error } = await supabase
    .from("product")
    .select("*, product-images(*), gallery(*), accessory(*)")
    .eq("slug", params.slug);

  if (productDetail?.length === 0) {
    throw json(
      {
        title: "Product not found",
        message: "We're unable to get this product. Try to navigate to get available products",
      },
      { status: 404 }
    );
  }

  if (error) {
    throw json({ title: "Error", message: error.message });
  }

  const { data: otherProducts, error: otherProductsError } = await supabase
    .from("product")
    .select("id, title, slug, product-preview-images(*)")
    .neq("slug", params.slug)
    .limit(3);

  if (otherProductsError) {
    throw json({ title: "Error", message: otherProductsError.message });
  }

  const transformedSuggestionProducts = [];

  for (const product of otherProducts) {
    const transformedProduct = {
      title: product.title,
      picture: product["product-preview-images"][0],
      slug: product.slug,
    };

    transformedSuggestionProducts.push(transformedProduct);
  }

  const productDetailAndFascinatedProducts = {
    productMainDetail: {
      id: productDetail[0].id,
      title: productDetail[0].title,
      price: productDetail[0].price,
      description: productDetail[0].description,
      slug: productDetail[0].slug,
      features: productDetail[0].features,
      isNew: productDetail[0].is_new,
      picture: productDetail[0]["product-images"][0],
    },
    accessories: [...productDetail[0].accessory],
    gallery: [...productDetail[0].gallery],
    suggestionProducts: transformedSuggestionProducts,
  };

  return productDetailAndFascinatedProducts;
};

export default productDetailLoader;
