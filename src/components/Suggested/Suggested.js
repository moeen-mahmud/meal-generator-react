import React from "react";
import "./Suggested.css";

const Suggested = (props) => {
  const {
    strMeal,
    strTags,
    strCategory,
    strArea,
    strMealThumb,
    strInstructions,
  } = props.meal;

  return (
    <main>
      <div className="wrapper">
        <div className="meal-info">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="meal-instruction">
          <h1 className="meal-title">{strMeal}</h1>
          <small className="category">{strCategory}</small>
          <small className="area">{strArea}</small>
          <p className="meal-desc">{strInstructions}</p>
          <small className="tag">{strTags}</small>
        </div>
      </div>
    </main>
  );
};

export default Suggested;
