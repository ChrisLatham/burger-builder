import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  totalPrice,
  purchaseCancel,
  purchaseCheckout,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {` ${ingredients[igKey]}`}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <h3>Price: £{totalPrice.toFixed(2)}</h3>
      <Button buttonType="Danger" clicked={purchaseCancel}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={purchaseCheckout}>
        Checkout
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
