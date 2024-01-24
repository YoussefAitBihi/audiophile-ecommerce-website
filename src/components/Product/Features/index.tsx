const SectionProductFeatures = ({ features }: { features: string }) => {
  return (
    <section
      className="section-product-features fluid-margin-400"
      aria-labelledby="section-features-title"
    >
      <h2 className="section-product-features__title tertiary-heading" id="features-title">
        Features
      </h2>
      <p className="section-product-features__features">{features}</p>
    </section>
  );
};

export default SectionProductFeatures;
