// Import Necessary Files
import React, { useState } from "react";
import Suggested from "../Suggested/Suggested";
import "./Meal.css";

// Meal Component
const Meal = () => {
  const [meal, setMeal] = useState([]);

  const handleClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  };

  return (
    <div className="meal">
      <button onClick={handleClick}>Click Me!</button>
      <Suggested meal={meal}></Suggested>
    </div>
  );
};

export default Meal;
