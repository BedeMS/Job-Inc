import React from "react";
import classes from "./Tab.module.css";

function Tab(props) {
  const handleClick = () => {
    props.display(props.name);
  };
  return (
    <div
      onClick={handleClick}
      className={
        props.active ? `${classes.Tab} ${classes.active}` : `${classes.Tab}`
      }
    >
      <p className={`${classes.Tab__name}`}>{props.name}</p>
    </div>
  );
}

export default Tab;
