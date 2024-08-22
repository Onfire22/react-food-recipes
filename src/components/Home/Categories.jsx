import Category from "./Category";

const Categories = ({ catalog = [] }) => {
  return (
    <ul className="list">
      {catalog.map((category) => {
        return <Category key={category.idCategory} {...category} />
      })}
    </ul>
  );
};

export default Categories;
