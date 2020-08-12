import React, { Fragment } from "react";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <div>Toolbar, Sidedraw, Backdrop</div>
      <main className={styles.Content}>{children}</main>
    </Fragment>
  );
};

export default Layout;
