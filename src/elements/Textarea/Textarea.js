import React from "react";
import classes from "./Textarea.module.css";

function Textarea(props) {
  return (
    <div className={classes.TextareaWrapper}>
      {props.label ? (
        <label className={classes.LabelDark} htmlFor={props.name}>
          {props.label}:
        </label>
      ) : (
        ""
      )}
      <textarea
        // rows="60"
        className={classes.Textarea}
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Textarea;
