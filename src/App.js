import { useEffect, useState } from "react";
import "./App.css";

// const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {
  return (
    <div className="App">
      <button onClick={clickHandle}>Click</button>
      <Meal></Meal>
    </div>
  );
}

function Meal() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch(clickHandle)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);

  return (
    <div className="wrapper">
      <div className="left-side">
        <figure>
          <img src={meal.strMealThumb} alt="" />
          <figcaption>
            <p>Category: {meal.strCategory}</p>
            <p>Origin: {meal.strArea}</p>
          </figcaption>
        </figure>
      </div>
      <div className="right-side"></div>
    </div>
  );
}

function clickHandle() {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  return URL;
}

export default App;
