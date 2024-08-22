import { useParams } from "react-router-dom";
import { getMealById } from "../../api";
import { useEffect, useState } from "react";
import RecipeTable from "./RecipeTable";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealById(id)
      .then((data) => setRecipe(data.meals[0]));
  },[id]);
  
  const { 
    strMeal, 
    strArea,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = recipe;

  return (
    <article className="recipe_article">
      <div className="article_header">
        <img src={strMealThumb} alt={strMeal} />
        <div className="article_text">
          <h3 className="article__title">{strMeal}</h3>
          <p className="article__category">{strCategory}</p>
          <p className="article__area">{strArea}</p>
          <p className="article__description">{strInstructions}</p>
        </div>
      </div>
      <RecipeTable recipe={recipe} />
      <iframe width="560" height="315" src={strYoutube && `https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title="YouTube video player" allowFullScreen></iframe>
    </article>
  );
};

export default Recipe;
