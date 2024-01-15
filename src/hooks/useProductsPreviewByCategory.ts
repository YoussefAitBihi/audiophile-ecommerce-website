import { useState, useEffect, useCallback } from "react";
import { ProductPreviewDescriptor, ProductsPreviewByCategoryState } from "@/types";
import supabase from "@/config/supabase-client";

const useProductsPreviewByCategory = (categorySlug: string) => {
  const initialState = {
    products: [],
    categoryName: "",
    isLoading: false,
    errorMessage: null,
  };

  const [productsPreviewState, setProductsPreviewState] =
    useState<ProductsPreviewByCategoryState>(initialState);

  const fetchProductsPreviewHandler = useCallback(async () => {
    setProductsPreviewState((prevProductsPreviewState) => {
      return {
        ...prevProductsPreviewState,
        isLoading: true,
      };
    });

    const { data: categoryWithProducts, error } = await supabase
      .from("category")
      .select("title, product(*)")
      .eq("slug", categorySlug);

    if (!categoryWithProducts!.length) {
      setProductsPreviewState((prevProductsPreviewState) => {
        return {
          ...prevProductsPreviewState,
          isLoading: false,
          errorMessage: "Category not found",
        };
      });
      return;
    }

    const products = categoryWithProducts![0].product;
    const transformedProducts: ProductPreviewDescriptor[] = [];

    for (const product of products) {
      const { data: previewImages, error } = await supabase
        .from("product-preview-images")
        .select("*")
        .eq("product_id", product.id);

      if (error) {
        throw new Error("");
      }

      const transformedProduct = {
        ...product,
        isNew: product.is_new,
        previewImages: {
          desktop: previewImages![0].desktop,
          tablet: previewImages![0].tablet,
          mobile: previewImages![0].mobile,
          alt: previewImages![0].alt,
        },
      };

      transformedProducts.push(transformedProduct);
    }

    setProductsPreviewState({
      products: transformedProducts,
      categoryName: categoryWithProducts![0].title,
      isLoading: false,
      errorMessage: null,
    });
  }, [categorySlug]);

  useEffect(() => {
    fetchProductsPreviewHandler();
  }, [categorySlug, fetchProductsPreviewHandler]);

  return productsPreviewState;
};

export default useProductsPreviewByCategory;
