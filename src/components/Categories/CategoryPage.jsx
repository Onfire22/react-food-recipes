import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getCategories } from "../../api";
import Categories from "./Categories";
import { Spinner } from "react-bootstrap";
import Search from "../Search";

const CategoryPage = () => {
  const [catalog, setCategories] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data.categories);
        setFilteredCatalog(search ? data.categories.filter(item => item.strCategory
          .toLowerCase()
          .includes(search.split('=')[1].toLowerCase())
        )
        :
        data.categories
      );
      });
  }, [search]);

  const filterCatalog = (text) => {
    const newCatalog = catalog.filter(item => item.strCategory
      .toLowerCase()
      .includes(text.toLowerCase()
    ));
    setFilteredCatalog(newCatalog);
    setSearchParams({ search: text });
  };
  
  return (
    <>
      <Search filter={filterCatalog} />
      {catalog.length === 0 ? <Spinner /> : <Categories catalog={filteredCatalog} />}
    </>
  );
};

export default CategoryPage;
