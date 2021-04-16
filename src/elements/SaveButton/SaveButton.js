import React, { useContext } from "react";
import classes from "./SaveButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataContext } from "../../context/companies.context";

function SaveButton(props) {
  const { dispatch } = useContext(DataContext);

  return (
    <div className={classes.SaveButton}>
      {props.saved ? (
        <FontAwesomeIcon
          icon={["fas", "bookmark"]}
          className={classes.SaveButton__icon}
          onClick={() =>
            dispatch({ type: "SAVE", id: props.id, companyId: props.companyId })
          }
        />
      ) : (
        <FontAwesomeIcon
          icon={["far", "bookmark"]}
          className={classes.SaveButton__icon}
          onClick={() =>
            dispatch({ type: "SAVE", id: props.id, companyId: props.companyId })
          }
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
