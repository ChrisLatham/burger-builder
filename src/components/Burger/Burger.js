import React from "react";
import Ingredient from "./Ingredients/Ingredient";
import styles from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  let ingredientsArray = Object.keys(ingredients)
    .map((ingredient) => {
      return [...Array(ingredients[ingredient])].map((_, index) => {
        return <Ingredient key={ingredient + index} type={ingredient} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={styles.Burger}>
      <Ingredient type="BreadTop" />
      {ingredientsArray}
      <Ingredient type="BreadBottom" />
    </div>
  );
};
export default Burger;
