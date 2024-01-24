import { slugify } from "@/helpers";
import supabase from "@/config/supabase-client";
import { faker } from "@faker-js/faker";
import {
  categories,
  products,
  productPreviewImages,
  productImages,
  galleries,
  accessoriesProduct,
} from "@/data";

// TODO: Creation of DB
// TODO: Create Tables
// TODO: Truncate Data
// TODO: Insert Data

/**
 * Store data to DB
 */
export const storeDataToDB = async () => {
  // Categories
  for (const category of categories) {
    const { error } = await supabase.from("category").insert([category]);

    if (error) {
      throw new Error(error.message);
    }
  }

  // Products
  for (const product of products) {
    const price = Number.parseFloat(faker.commerce.price({ min: 800, max: 1400, dec: 2 }));
    const slug = slugify(product.title);
    const is_new = faker.datatype.boolean();

    const updatedProduct = {
      ...product,
      price,
      slug,
      is_new,
    };

    const { error } = await supabase.from("product").insert([updatedProduct]);

    if (error) {
      throw new Error(error.message);
    }
  }

  // Product Preview Images
  for (const image of productPreviewImages) {
    const { error } = await supabase.from("product-preview-images").insert([image]);

    if (error) {
      throw new Error(error.message);
    }
  }

  // Product Images
  for (const productImage of productImages) {
    const { error } = await supabase.from("product-images").insert([productImage]);

    if (error) {
      throw new Error(error.message);
    }
  }

  // Gallery
  for (const gallery of galleries) {
    const { error } = await supabase.from("gallery").insert([gallery]);

    if (error) {
      throw new Error(error.message);
    }
  }

  // Accessory
  for (const accessory of accessoriesProduct) {
    const { error } = await supabase.from("accessory").insert([accessory]);

    if (error) {
      throw new Error(error.message);
    }
  }
};

// storeDataToDB();
