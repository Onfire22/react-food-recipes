import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import CategoryPage from "./components/Categories/CategoryPage";
import MealPage from "./components/MealsList/MealPage";
import Recipe from "./components/Recipe/Recipe";
import RandomMeal from "./components/MealsList/RandomMeal";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<CategoryPage />} />
          <Route path="/category/:name" element={<MealPage />} />
          <Route path="/meal/:id" element={<Recipe />} />
          <Route path="/random_meal" element={<RandomMeal />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
