import React, { useContext } from "react";
import classes from "./ModifyButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataContext } from "../../context/companies.context";

function ModifyButton(props) {
  const { dispatch } = useContext(DataContext);

  function handleClick(){
    props.handleEdit(props.id)
  }

  const buttonPick =
    props.type === "edit" ? (
      <div className={classes.EditButton} onClick={handleClick}>
        <FontAwesomeIcon
          icon={["far", "edit"]}
          className={classes.Button__icon}
        />
      </div>
    ) : (
      <div
        className={classes.DeleteButton}
        onClick={() =>
          dispatch({ type: "DELETE", companyId: props.companyId, id: props.id })
        }
      >
        <FontAwesomeIcon
          icon={["fas", "trash"]}
          className={classes.Button__icon}
        />
      </div>
    );
  return buttonPick;
}

export default ModifyButton;
