import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRandomMeal } from "../../api";
import Preloader from "../Preloader";
import Meals from "./Meals";

const RandomMeal = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getRandomMeal(name)
      .then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      {meals.length === 0 ? <Preloader /> : <Meals meals={meals} />}
    </>
  );
};

export default RandomMeal;
