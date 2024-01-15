import supabase from "@/config/supabase-client";
import { ProductsPreviewByCategoryDescriptor } from "@/types";
import { json } from "react-router-dom";

type LoaderDefinition = {
  params: {
    slug: string;
  };
};

const productsPreviewByCategoryLoader = async ({ params }: LoaderDefinition) => {
  const { data: categoryWithProducts, error } = await supabase
    .from("category")
    .select("title, product(*)")
    .eq("slug", params.slug);

  if (error) {
    throw json({ message: error.message }, { status: 500 }); // Later
  }

  if (!categoryWithProducts?.length) {
    throw json(
      {
        title: "Category Not found",
        message:
          "We're unable to fetch this specific category! Try to navigate to get the right categories",
      },
      { status: 404 }
    );
  }

  const products = categoryWithProducts[0].product;

  const transformedProductsByCategory: ProductsPreviewByCategoryDescriptor = {
    name: categoryWithProducts[0].title,
    products: [],
  };

  for (const product of products) {
    const { data: previewImages, error } = await supabase
      .from("product-preview-images")
      .select("*")
      .eq("product_id", product.id);

    if (error) {
      throw json({ title: error.hint, message: error.message }, { status: 500 });
    }

    if (!previewImages.length) {
      throw json(
        {
          title: "Product preview Images not found",
          message:
            "We're unable to fetch this specific category! Try to navigate to get the right categories",
        },
        { status: 500 }
      );
    }

    const transformedProduct = {
      ...product,
      isNew: product.is_new,
      previewImages: {
        desktop: previewImages[0].desktop,
        tablet: previewImages[0].tablet,
        mobile: previewImages[0].mobile,
        alt: previewImages[0].alt,
      },
    };

    transformedProductsByCategory.products.push(transformedProduct);
  }

  return transformedProductsByCategory;
};

export default productsPreviewByCategoryLoader;
