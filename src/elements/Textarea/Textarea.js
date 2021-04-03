import React from "react";
import classes from "./Textarea.module.css";

function Textarea(props) {
  return (
    <div className={classes.TextareaWrapper}>
      <label className={classes.LabelDark} htmlFor={props.name}>
        {props.label}:
      </label>
      <textarea
        className={classes.Textarea}
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Textarea;
