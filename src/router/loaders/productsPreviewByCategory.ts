import supabase from "@/config/supabase-client";
import { LoaderDefinition, ProductsPreviewByCategoryDescriptor } from "@/types";
import { json } from "react-router-dom";

/**
 * Allow to retrieve products by category
 * @param param0
 * @returns
 */
const productsPreviewByCategoryLoader = async ({ params }: LoaderDefinition) => {
  const { data: categoryWithProducts, error } = await supabase
    .from("category")
    .select("title, product(*)")
    .eq("slug", params.slug);

  if (error) {
    throw json({ title: error.hint, message: error.message }, { status: 500 }); // Later
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
    const { data: picture, error } = await supabase
      .from("product-preview-images")
      .select("*")
      .eq("product_id", product.id);

    if (error) {
      throw json({ title: error.hint, message: error.message }, { status: 500 });
    }

    if (!picture.length) {
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
      picture: {
        desktop: picture[0].desktop,
        tablet: picture[0].tablet,
        mobile: picture[0].mobile,
        alt: picture[0].alt,
      },
    };

    transformedProductsByCategory.products.push(transformedProduct);
  }

  return transformedProductsByCategory;
};

export default productsPreviewByCategoryLoader;
