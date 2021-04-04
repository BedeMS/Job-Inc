import React from "react";
import classes from "./ModifyButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModifyButton(props) {
  const buttonPick =
    props.type === "edit" ? (
      <div className={classes.EditButton}>
        <FontAwesomeIcon
          icon={["far", "edit"]}
          className={classes.Button__icon}
        />
      </div>
    ) : (
      <div className={classes.DeleteButton}>
        <FontAwesomeIcon
          icon={["fas", "trash"]}
          className={classes.Button__icon}
        />
      </div>
    );
  return buttonPick;
}

export default ModifyButton;
