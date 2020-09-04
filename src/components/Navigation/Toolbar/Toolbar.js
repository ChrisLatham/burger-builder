import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  const toggleSideDrawer = () => {
    props.sideDrawerToggle();
  };
  return (
    <header className={styles.Toolbar}>
      <div>
        <div
          className={styles.HamburgerIcon}
          onClick={() => toggleSideDrawer()}
        >
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      </div>
      <Logo />
      <div className={styles.DesktopOnly}>
        <NavigationItems />
      </div>
    </header>
  );
};

export default Toolbar;
