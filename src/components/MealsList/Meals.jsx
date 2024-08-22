import Meal from "./Meal";

const Meals = ({ meals = [] }) => {
  return (
    <ul className="list">
      {meals.map((meal) => {
        return <Meal key={meal.idMeal} {...meal} />
      })}
    </ul>   
  );
};

export default Meals;
