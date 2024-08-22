import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import CategoryPage from "./components/Categories/CategoryPage";
import MealPage from "./components/MealsList/MealPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<CategoryPage />} />
          <Route path="/category/:name" element={<MealPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
