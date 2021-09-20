import React from "react";

const Suggested = (props) => {
  const { strMeal, strTags, strCategory, strArea, strMealThumb } = props.meal;

  return (
    <div className="wrapper">
      <div className="meal-info">
        <figure>
          <img src={strMealThumb} alt={strMeal} />
          <figcaption>
            <h3 className="meal-title">{strMeal}</h3>
            <p>{strCategory}</p>
            <p>{strArea}</p>
            <small>
              <label htmlFor="tags">{strTags}</label>
            </small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Suggested;
