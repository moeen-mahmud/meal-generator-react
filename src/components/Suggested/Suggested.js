// Import Necessary Files
import React from "react";
import "./Suggested.css";

// Suggestion Component
const Suggested = (props) => {
  const {
    strMeal,
    strTags,
    strCategory,
    strArea,
    strMealThumb,
    strInstructions,
  } = props.meal;

  const ingredients = Object.values(props.meal).slice(9, 29);
  const measures = Object.values(props.meal).slice(29, 49);

  return (
    <main>
      <div className="wrapper">
        <div className="meal-info">
          <img src={strMealThumb} alt={strMeal} />
          <div key={strMeal} className="ingredients">
            <div>
              <h3>Ingredients</h3>
              {ingredients.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </div>
            <div>
              <h3>Measurements</h3>
              {measures.map((measure) => (
                <p>{measure}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="meal-instruction">
          <h1 className="meal-title">{strMeal}</h1>
          <small className="category">{strCategory}</small>
          <small className="area">{strArea}</small>
          <p className="meal-desc">{strInstructions}</p>
          <small className="tag">{strTags ? strTags : "Ordinary"}</small>
        </div>
      </div>
    </main>
  );
};

export default Suggested;
