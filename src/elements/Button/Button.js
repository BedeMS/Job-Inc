import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <p className={classes.Button__name}>{props.name}</p>
    </div>
  );
};

export default Button;
