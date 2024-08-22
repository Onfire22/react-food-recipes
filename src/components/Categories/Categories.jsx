import Category from "./Category";

const Categories = ({ catalog = [] }) => {
  return (
    <>
      {
        catalog.length === 0
        ? 
        <h2>Nothing found</h2>
        :
        <ul className="list">
          {catalog.map((category) => {
            return <Category key={category.idCategory} {...category} />
          })}
        </ul>
      }
    </>
  );
};

export default Categories;
