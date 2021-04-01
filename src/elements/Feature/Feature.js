import React from "react";
import classes from "./Feature.module.css";

function Feature(props) {
  return (
    <div className={classes.Feature}>
      <h1 className={classes.Feature__title}>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default Feature;
