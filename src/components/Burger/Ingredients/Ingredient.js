import React, { Component } from "react";
import styles from "./Ingredient.module.css";
import PropTypes from "prop-types";

class Ingredient extends Component {
  render() {
    const { type } = this.props;
    let ingredient;
    switch (type) {
      case "BreadBottom":
        ingredient = <div className={styles.BreadBottom}>&nbsp;</div>;
        break;
      case "BreadTop":
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}>&nbsp;</div>
            <div className={styles.Seeds2}>&nbsp;</div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={styles.Meat}>&nbsp;</div>;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese}>&nbsp;</div>;
        break;
      case "salad":
        ingredient = <div className={styles.Salad}>&nbsp;</div>;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon}>&nbsp;</div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string,
};

export default Ingredient;
