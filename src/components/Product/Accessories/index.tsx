import { FC } from "react";

type AccessoryDescriptor = {
  id: string;
  title: string;
  quantity: number;
};

const SectionProductAccessories: FC<{ accessories: AccessoryDescriptor[] }> = ({ accessories }) => {
  return (
    <section
      className="section-product-accessories fluid-margin-400"
      aria-labelledby="product-accessories"
    >
      <h2 className="section-product-accessories__title tertiary-heading" id="product-accessories">
        in the box
      </h2>
      <ul role="list" className="section-product-accessories__list">
        {accessories.map((accessory) => (
          <li className="section-product-accessories__accessory" key={accessory.id}>
            <div className="section-product-accessories__accessory-quantity">
              <span className="visually-hidden">{`The quantity of ${accessory.title} is ${accessory.quantity}`}</span>
              <span>{`${accessory.quantity}x`}</span>
            </div>
            <p>{accessory.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionProductAccessories;
