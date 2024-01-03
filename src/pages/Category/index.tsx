import { useParams, json } from "react-router-dom";
import { categories } from "@/data";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find((category) => category.slug === slug);

  if (!category) {
    throw json({ message: "We're having trouble fetching this category!" }, { status: 404 });
  }

  return (
    <>
      <header className="category-header">
        <h1 className="secondary-heading">{category!.title}</h1>
      </header>
    </>
  );
};

export default CategoryPage;
