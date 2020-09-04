import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonType, clicked, children }) => (
  <button
    className={[styles.Button, styles[buttonType]].join(" ")}
    onClick={clicked}
  >
    {children}
  </button>
);

export default Button;
