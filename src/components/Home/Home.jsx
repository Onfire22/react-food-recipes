import { useEffect, useState } from "react";
import { getCategories } from "../../api";
import Categories from "./Categories";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [catalog, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data.categories));
  }, []);
  
  return (
    <>
      {catalog.length === 0 ? <Spinner /> : <Categories catalog={catalog} />}
    </>
  );
};

export default Home
