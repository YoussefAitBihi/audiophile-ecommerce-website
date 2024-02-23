import supabase from "@/config/supabase-client";
import { json } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { PictureDescriptor } from "@/types";

type ProductPreviewModalState = {
  items: PictureDescriptor[];
  isLoading: boolean;
  productPreviewIsShown: boolean;
};

const useProductPreviewModal = (productID: string) => {
  const initialState = {
    items: [],
    isLoading: false,
    productPreviewIsShown: false,
  };

  const [productPreviewModalState, setProductPreviewModalState] =
    useState<ProductPreviewModalState>(initialState);

  const showProductPreviewModal = () => {
    setProductPreviewModalState((prevState) => {
      return {
        ...prevState,
        productPreviewIsShown: true,
      };
    });
  };

  const hideProductPreviewModal = () => {
    setProductPreviewModalState((prevState) => {
      return {
        ...prevState,
        productPreviewIsShown: false,
      };
    });
  };

  const fetchGallery = useCallback(async () => {
    setProductPreviewModalState((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      };
    });
    const { data, error } = await supabase.from("product").select("gallery(*)").eq("id", productID);

    if (error) {
      throw json(
        {
          title: "Error",
          message: error.message,
        },
        { status: 500 }
      );
    }

    if (!data.length) {
      throw json(
        {
          title: "Gallery not found",
          message: "We can't unfortunately fetch this specific gallery.",
        },
        { status: 404 }
      );
    }

    setProductPreviewModalState((prevState) => {
      return {
        ...prevState,
        isLoading: false,
        items: data[0].gallery,
      };
    });
  }, [productID]);

  useEffect(() => {
    if (!productPreviewModalState.productPreviewIsShown) return;

    fetchGallery();
  }, [fetchGallery, productPreviewModalState.productPreviewIsShown]);

  return {
    productPreviewModalState,
    showProductPreviewModal,
    hideProductPreviewModal,
  };
};

export default useProductPreviewModal;
