import supabase from "@/config/supabase-client";
import { LoaderDefinition } from "@/types";
import { json } from "react-router-dom";

const productDetailLoader = async ({ params }: LoaderDefinition) => {
  const { data: productDetail, error } = await supabase
    .from("product")
    .select("*, product-images(*), gallery(*), accessory(*)")
    .eq("slug", params.slug);

  if (error) {
    throw json({ title: "Error", message: error.message });
  }

  if (!productDetail?.length) {
    throw json(
      {
        title: "Product not found",
        message: "We're unable to get this product. Try to navigate to get available products",
      },
      { status: 404 }
    );
  }

  return productDetail[0];
};

export default productDetailLoader;
