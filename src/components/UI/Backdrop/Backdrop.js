import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ show, clicked }) => {
  return show ? (
    <div className={styles.BackDrop} onClick={clicked}>
      {" "}
    </div>
  ) : null;
};

export default Backdrop;
