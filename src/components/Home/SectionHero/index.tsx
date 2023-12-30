import PrimaryButton from "@/components/UI/Buttons/Primary";

const SectionHero = () => {
  return (
    <section className="section-hero" aria-labelledby="xx99-mark-ii-headphones">
      <div className="container">
        <div className="product-detail-grid">
          <div className="section-hero__header">
            <p className="new-product-text new-product-text--white">new product</p>
            <h1 className="primary-heading" id="xx99-mark-ii-headphones">
              XX99 mark ii headphones
            </h1>
          </div>
          <p className="section-hero__description">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <PrimaryButton tag="link" href="/product/xx99-mark-ii-headphones" modifier="orange">
            see product
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
