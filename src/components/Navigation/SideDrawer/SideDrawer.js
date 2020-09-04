import React, { Fragment } from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  const getSideDrawerStatus = () => {
    return props.open ? styles.Open : styles.Close;
  };
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={[styles.SideDrawer, getSideDrawerStatus()].join(" ")}>
        <div style={{ height: "56px" }}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Fragment>
  );
};

export default SideDrawer;
