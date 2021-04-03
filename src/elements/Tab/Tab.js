import React from "react";
import classes from "./Tab.module.css";

function Tab(props) {
  return (<div className={props.active ? `${classes.Tab} ${classes.active}` : `${classes.Tab}`}>
    <p className={`${classes.Tab__name}`}>{props.name}</p>
  </div>);
}

export default Tab;
