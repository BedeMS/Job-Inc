import React from "react";
import classes from "./Submit.module.css";

function Submit(props) {
  return (
    <button type="submit" className={`${classes.Submit} ${classes.light}`}>
      {props.name}
    </button>
  );
}

export default Submit;
