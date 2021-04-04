import React from "react";
import classes from "./Select.module.css";

function Select(props) {
  const options = props.options.map((el, i) => {
    return <option value={props.values[i]}>{el}</option>;
  });
  return (
    <div className={classes.SelectWrapper}>
      <label className={classes.Label}>{props.label}</label>
      <select className={classes.Select} name={props.name} id={props.name}>
        {options}
      </select>
    </div>
  );
}

export default Select;
