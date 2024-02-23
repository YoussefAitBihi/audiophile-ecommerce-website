import ChevronLeftIcon from "@/assets/icons/ChevronLeft";
import ChevronRightIcon from "@/assets/icons/ChevronRight";
import CloseIcon from "@/assets/icons/Close";
import AddProductToCart from "../../AddProductToCartForm";
import { createPortal } from "react-dom";
import { FC } from "react";
import { PictureDescriptor, ProductMainDetailDescriptor } from "@/types";
import { formatPrice } from "@/helpers";
import Picture from "@/components/UI/Picture";

type ProductPreviewModalProps = {
  productDetail: ProductMainDetailDescriptor;
  slides: PictureDescriptor[];
  onClose: () => void;
};

const ProductPreviewModal: FC<ProductPreviewModalProps> = ({ productDetail, onClose, slides }) => {
  const cartItem = {
    id: productDetail.id,
    title: productDetail.title,
    abbreviatedTitle: productDetail.title.split(" ").shift()!,
    price: productDetail.price,
    picture: productDetail.picture.mobile,
    quantity: 0,
  };

  const formattedPrice = formatPrice(productDetail.price);

  const productPreviewModalContent = (
    <div
      className="product-preview-modal | backdrop-400"
      id="product-preview-item-modal"
      onClick={onClose}
    >
      <button className="product-preview-modal__close-button" onClick={onClose}>
        <span className="visually-hidden">Click to close the product preview modal</span>
        <CloseIcon />
      </button>
      <div
        className="product-preview-modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="product-preview-modal__carousel">
          <button className="product-preview-modal__chevron-button product-preview-modal__chevron-button--left">
            <span className="visually-hidden">Click to go to the preview slide</span>
            <ChevronLeftIcon />
          </button>
          <button className="product-preview-modal__chevron-button product-preview-modal__chevron-button--right">
            <span className="visually-hidden">Click to go to the next slide</span>
            <ChevronRightIcon />
          </button>
          <ul className="product-preview-modal__slides" role="list">
            {slides.map((slide, index) => (
              <li
                className="product-preview-modal__slide"
                key={index}
                id={`product-preview-modal-${index}`}
              >
                <Picture {...slide} alt={`Slide ${index + 1}`} />
              </li>
            ))}
          </ul>
          <ul className="product-preview-modal__indicators" role="list">
            {slides.map((slide, index) => (
              <li className="product-preview-modal__indicator" key={index}>
                <button aria-expanded="false" aria-controls={`product-preview-modal-${index}`}>
                  <figure>
                    <img src={slide.mobile} alt={`Indicator ${index + 1}`} />
                  </figure>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-preview-modal__detail | product-detail-grid">
          <div>
            {productDetail.isNew && <p className="new-product-text">new product</p>}
            <h2 className="secondary-heading">{productDetail.title}</h2>
          </div>
          <p>{productDetail.description}</p>
          <p>{formattedPrice}</p>
          <AddProductToCart cartItem={cartItem} />
        </div>
      </div>
    </div>
  );

  const portalElement = document.getElementById("modals-wrapper") as HTMLElement;

  return createPortal(productPreviewModalContent, portalElement);
};

export default ProductPreviewModal;
