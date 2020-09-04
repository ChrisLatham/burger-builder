import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem linkText="Home" url="/" />
      <NavigationItem linkText="Burger Builder" url="/" active />
      <NavigationItem linkText="Checkout" url="/" />
    </ul>
  );
};
export default NavigationItems;
