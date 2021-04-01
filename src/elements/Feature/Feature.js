import React from "react";
import classes from "./Feature.module.css";

function Feature(props) {
  // if user has recent search, then display this
  const recentSearch = props.recentSearch ? (
    <div className={classes.Feature__recent}>
      <p className={classes.Feature__search}>Front-End Developer</p>
      <p className={classes.Feature__search}>Customer Service</p>
      <p className={classes.Feature__search}>Customer Service</p>
      <p className={classes.Feature__search}>Customer Service</p>
    </div>
  ) : (
    ""
  );
  return (
    <div className={classes.Feature}>
      <h1 className={classes.Feature__title}>{props.title}</h1>
      {recentSearch}
      {props.children}
    </div>
  );
}

export default Feature;
