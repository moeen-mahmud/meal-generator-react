import React, { useState } from "react";
import Suggested from "../Suggested/Suggested";

const Meal = () => {
  const [meal, setMeal] = useState([]);

  const handleClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <Suggested meal={meal}></Suggested>
    </div>
  );
};

export default Meal;
