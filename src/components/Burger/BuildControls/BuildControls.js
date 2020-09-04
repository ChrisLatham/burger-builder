import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  ingredientAdd,
  ingredientRemove,
  disabledInfo,
  purchasable,
  order,
  price,
}) => {
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: £{price.toFixed(2)}</p>
      {controls.map((item) => {
        return (
          <BuildControl
            key={item.label}
            label={item.label}
            ingredientAdd={() => ingredientAdd(item.type)}
            ingredientRemove={() => ingredientRemove(item.type)}
            disabled={disabledInfo[item.type]}
          />
        );
      })}
      <button
        className={styles.OrderButton}
        disabled={!purchasable}
        onClick={order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
