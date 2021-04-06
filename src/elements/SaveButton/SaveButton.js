import React from "react";
import classes from "./SaveButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SaveButton(props) {
  const handleClick = () => {
    props.handleSave(props.id)
  }

  return (
    <div className={classes.SaveButton}>
      {props.saved ? (
        <FontAwesomeIcon
          icon={["fas", "bookmark"]}
          className={classes.SaveButton__icon}
          onClick={handleClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={["far", "bookmark"]}
          className={classes.SaveButton__icon}
          onClick={handleClick}
        />
      )}
      {/* <FontAwesomeIcon icon="bookmark" className={classes.SaveButton__icon} /> */}
      <p className={classes.SaveButton__name}>
        {props.saved ? "Saved" : "Save"}
      </p>
    </div>
  );
}

export default SaveButton;
