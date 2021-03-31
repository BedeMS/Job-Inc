import React from "react";
import classes from "./SaveButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function SaveButton(props) {
  return (
    <div className={classes.SaveButton}>
      <FontAwesomeIcon icon={["far", "bookmark"]} className={classes.SaveButton__icon} />
      {/* <FontAwesomeIcon icon="bookmark" className={classes.SaveButton__icon} /> */}
      <p className={classes.SaveButton__name}>Save</p>
    </div>
  );
}

export default SaveButton;
