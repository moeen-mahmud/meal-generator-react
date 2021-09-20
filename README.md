# Random Meal Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- User should able to find any meal by clicking the button. This app will randomly suggest a meal. A user can also get another meal by clicking the button again.

### Screenshot

![Desktop-View](./screenshot/Random-Meal-Generator-GIF.gif)

### Links

- Solution URL: [Git Repo](https://github.com/moeen-mahmud/meal-generator-react)
- Live Site URL: [Live Site](https://meal-generator-react.vercel.app/)

## My Process

### Built With

- React JS
- JavaScript
- API
- CSS3
- HTML5
- [GoogleFonts](https://fonts.google.com/) - For font styles

### What I learned

By doing this project, I learned how to create custom hook and components. I use the `useState` to determine the state and keep a function for the button as the event listener. I demonstrated the code below:

```js
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
```

### Continued Development

- This is my second React based project. From now on, I will try to build projects with React.

## Author

- Twitter - [moeen_mahmud](https://twitter.com/moeen_mahmud)

## Acknowledgements

This project is inspired from [Florin Pop's 100days100project Challenge](https://www.florin-pop.com/blog/2019/09/random-meal-generator). Although, he did the project using Vanilla JS. However, I try to do this using React.
