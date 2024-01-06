import ProductPicture from "@/components/Product/Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";

const SectionProducts = () => {
  return (
    <section className="section-products" aria-labelledby="section-products">
      <div className="container">
        <h2 className="visually-hidden" id="section-products">
          Top products
        </h2>
        <ul role="list" className="section-products__list">
          <li className="section-products__product section-products__product--first | border-radius-300">
            <ProductPicture
              desktop="./src/assets/images/home/desktop/image-speaker-zx9.png"
              tablet="./src/assets/images/home/tablet/image-speaker-zx9.png"
              mobile="./src/assets/images/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
            />
            <div className="product-detail-grid">
              <h3 className="section-products__subtitle | primary-heading">zx9 speaker</h3>
              <p>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                sound.
              </p>
              <PrimaryButton tag="button" href="/product/zx9-speaker" modifier="white">
                see product
              </PrimaryButton>
            </div>
          </li>
          <li className="section-products__product section-products__product--second border-radius-300">
            <div className="section-products__product-detail">
              <h3 className="primary-heading">zx7 speaker</h3>
              <PrimaryButton tag="button" href="/product/zx7-speaker" modifier="white">
                see product
              </PrimaryButton>
            </div>
          </li>
          <li>
            <div>
              <ProductPicture
                desktop="./src/assets/images/home/desktop/image-earphones-yx1.jpg"
                tablet="./src/assets/images/home/tablet/image-earphones-yx1.jpg"
                mobile="./src/assets/images/home/mobile/image-earphones-yx1.jpg"
                alt="ZX9 Speaker"
              />
            </div>
            <div className="">
              <h3 className="primary-heading">yx1 earphones</h3>
              <PrimaryButton tag="button" href="/product/yx1-speaker" modifier="white">
                see product
              </PrimaryButton>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionProducts;
