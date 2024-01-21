const SectionProductFeatures = ({ features }: { features: string }) => {
  return (
    <section className="section-product-features" aria-labelledby="section-features-title">
      <h2 id="features-title">Features</h2>
      <p>{features}</p>
    </section>
  );
};

export default SectionProductFeatures;
