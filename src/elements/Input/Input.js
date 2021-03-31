import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.InputWrapper}>
      <label className={classes.Label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={classes.Input}
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Input;
