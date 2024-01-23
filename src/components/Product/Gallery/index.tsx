import Picture from "@/components/UI/Picture";
import { PictureDescriptor } from "@/types";
import { FC } from "react";

type ProductGalleryDescriptor = { title: string; gallery: PictureDescriptor[] };

const SectionProductGallery: FC<ProductGalleryDescriptor> = ({ gallery, title }) => {
  return (
    <section className="section-product-gallery" aria-labelledby="">
      <h2 className="visually-hidden">{title} Gallery</h2>
      <ul className="section-product-gallery__list">
        {gallery.map((item, index) => (
          <li className="section-product-gallery__item" key={index}>
            <Picture {...item} alt={`Image ${index + 1}`} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionProductGallery;
