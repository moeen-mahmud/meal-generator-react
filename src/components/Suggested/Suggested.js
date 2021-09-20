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
    strSource,
    strYoutube,
  } = props.meal;

  return (
    <main>
      <div className="wrapper">
        <div className="meal-info">
          <img src={strMealThumb} alt={strMeal} />
          <h3 className="meal-title">{strMeal}</h3>
          <p>{strCategory}</p>
          <p>{strArea}</p>
        </div>
        <div className="meal-instruction">
          <p className="meal-desc">{strInstructions}</p>
        </div>
      </div>
      <div className="footer">
        <small className="source">{strSource}</small>
        <small className="source">{strYoutube}</small>
        <p className="tag">{strTags}</p>
      </div>
    </main>
  );
};

export default Suggested;
