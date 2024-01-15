import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const CategoryPage = () => {
  const data = useLoaderData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <header className="category-header">
        {/* <h1 className="secondary-heading">{category!.title}</h1> */}
      </header>
    </>
  );
};

export default CategoryPage;
