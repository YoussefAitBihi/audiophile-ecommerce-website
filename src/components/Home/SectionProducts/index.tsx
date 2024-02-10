import Picture from "@/components/UI/Picture";
import PrimaryButton from "@/components/UI/Buttons/Primary";

const SectionProducts = () => {
  return (
    <section className="section-products fluid-margin-400" aria-labelledby="section-products">
      <div className="container">
        <h2 className="visually-hidden" id="section-products">
          Top products
        </h2>
        <ul role="list" className="section-products__list">
          <li className="section-products__product section-products__product--first | border-radius-300">
            <Picture
              desktop="./src/assets/images/home/desktop/image-speaker-zx9.png"
              tablet="./src/assets/images/home/tablet/image-speaker-zx9.png"
              mobile="./src/assets/images/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
            />
            <div className="product-detail-grid product-detail-grid--centered">
              <h3 className="secondary-heading">zx9 speaker</h3>
              <p>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                sound.
              </p>
              <PrimaryButton tag="link" href="/product/zx9-speaker" modifier="white">
                see product
              </PrimaryButton>
            </div>
          </li>
          <li className="section-products__product section-products__product--second | border-radius-300">
            <div className="section-products__product-detail">
              <h3 className="secondary-heading primary-heading--black">zx7 speaker</h3>
              <PrimaryButton tag="link" href="/product/zx7-speaker" modifier="white">
                see product
              </PrimaryButton>
            </div>
          </li>
          <li className="section-products__product section-products__product--third">
            <div>
              <Picture
                desktop="./src/assets/images/home/desktop/image-earphones-yx1.jpg"
                tablet="./src/assets/images/home/tablet/image-earphones-yx1.jpg"
                mobile="./src/assets/images/home/mobile/image-earphones-yx1.jpg"
                alt="Earphones yx1"
              />
            </div>
            <div className="section-products__product-detail border-radius-300">
              <h3 className="secondary-heading primary-heading--black">yx1 earphones</h3>
              <PrimaryButton tag="link" href="/product/yx1-speaker" modifier="white">
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
