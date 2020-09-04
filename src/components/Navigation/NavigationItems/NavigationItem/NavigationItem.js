import React from "react";
import styles from "./NavigationItem.module.css";

const NavigationItem = ({ url, linkText, active }) => {
  const activeClass = () => {
    return active ? styles.Active : null;
  };
  return (
    <li className={styles.NavigationItem}>
      <a className={activeClass()} href={url}>
        {linkText}
      </a>
    </li>
  );
};

export default NavigationItem;
