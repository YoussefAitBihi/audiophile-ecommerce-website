import { slugify } from "@/helpers";
import supabase from "@/config/supabase-client";
import { faker } from "@faker-js/faker";
import { categories, products, productPreviewImages } from "@/data";
import { json } from "react-router-dom";

/**
 * Insert categories to DB
 */
export const storeCategoriesInDB = async () => {
  for (const category of categories) {
    try {
      const { error } = await supabase.from("category").insert([category]);

      if (error) {
        throw new Error(
          "We are unable to insert this category to DB! Check your connection, Your API KEY or API URL"
        );
      }
    } catch (error) {
      throw new Error(
        "There was an error when inserting categories to DB! Check your connection, Your API KEY or API URL"
      );
    }
  }
};

/**
 * Insert associated product to DB
 */
export const storeProductsInDB = async () => {
  for (const product of products) {
    const { title } = product;
    const categoryTitle = title.split(" ").pop();
    let updatedProduct;

    try {
      const { data: category } = await supabase
        .from("category")
        .select("*")
        .ilike("title", `%${categoryTitle}%`);

      if (!category) {
        throw new Error("We're unable to retrieve this specific category!");
      }

      const description = faker.commerce.productDescription();
      const price = Number.parseFloat(faker.commerce.price({ min: 800, max: 1400, dec: 2 }));
      const slug = slugify(product.title);
      const is_new = faker.datatype.boolean();
      const features = faker.commerce.productDescription();
      const category_id = category[0].id;

      updatedProduct = {
        ...product,
        description,
        price,
        slug,
        is_new,
        features,
        category_id,
      };
    } catch (error) {
      throw new Error(
        "There was an error when retrieving this category! Check your connection, Your API KEY or API URL"
      );
    }

    try {
      await supabase.from("product").insert([updatedProduct]);
    } catch (error) {
      throw new Error(
        "There was an error when inserting products to DB! Check your connection, Your API KEY or API URL"
      );
    }
  }
};

/**
 * Insert associated preview images to DB
 */
export const storeProductPreviewImagesInDB = async () => {
  for (const image of productPreviewImages) {
    const { alt } = image;
    let updatedPreviewImage;

    try {
      const { data: productId } = await supabase
        .from("product")
        .select("id")
        .ilike("title", `%${alt}%`);

      if (!productId) {
        throw new Error("There was an error when fetching the product ID");
      }

      updatedPreviewImage = { ...image, product_id: productId[0].id };

      console.log(updatedPreviewImage);

      try {
        await supabase.from("product-preview-images").insert([updatedPreviewImage]);
      } catch (error) {
        throw new Error(
          "We're unable to insert this preview image! Check your internet connection, Your SUPABASE URL/KEY or You don't create a new policy yet"
        );
      }
    } catch (error) {
      throw new Error(
        "We're unable to retrieve the product! Check your internet connection, Your SUPABASE URL/KEY or You don't create a new policy yet"
      );
    }
  }
};

export const fetchProductsByCategory = async (slug: string) => {
  try {
    // if (!category) {
    //   throw json({ message: "We're unable to find this category!" }, { status: 404 });
    // }
    // try {
    //   const { data: products } = await supabase
    //     .from("product")
    //     .select("*")
    //     .eq("category_id", category[0].id);
    //   console.log(products);
    // } catch (error) {
    //   throw new Error("We're unable to fetch products");
    // }
  } catch (error) {
    throw new Error(
      "We're unable to get this category! Check your connection, Your SUPABASE URL/KEY or You don't create a new policy yet"
    );
  }
};
