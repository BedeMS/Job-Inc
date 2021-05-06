import React from "react";
import uniqid from "uniqid";
import classes from "./Select.module.css";

function Select(props) {
  const options = props.options.map((el, i) => {
    return (
      <option key={uniqid()} value={el}>
        {el}
      </option>
    );
  });
  return (
    <div className={classes.SelectWrapper}>
      <label className={classes.Label}>{props.label}</label>
      <select
        value={props.value}
        onChange={props.handleChange}
        className={classes.Select}
        name={props.name}
        id={props.name}
      >
        <option defaultValue value="">
          Select an Option
        </option>
        {options}
      </select>
    </div>
  );
}

export default Select;
