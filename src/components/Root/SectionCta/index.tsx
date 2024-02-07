import Picture from "@/components/UI/Picture";

export default function SectionCta() {
  return (
    <section className="section-cta fluid-margin-400" aria-labelledby="section-cta-title">
      <div className="container">
        <div className="product-grid product-grid--picture-first">
          <Picture
            desktop="/src/assets/images/shared/desktop/image-best-gear.jpg"
            tablet="/src/assets/images/shared/tablet/image-best-gear.jpg"
            mobile="/src/assets/images/shared/mobile/image-best-gear.jpg"
            alt="Best gear ever"
          />
          <div className="product-detail-grid">
            <h2 className="secondary-heading" id="section-cta-title">
              Bringing you the <span className="text-primary-400">best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier store for high end
              headphones, earphones, speakers, and audio accessories. We have a large showroom and
              luxury demonstration rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic people who make
              Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
