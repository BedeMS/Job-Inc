import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./FollowButton.module.css";
import { DataContext } from "../../context/companies.context";

const FollowButton = (props) => {
  const { dispatch } = useContext(DataContext);
  return (
    <div
      className={
        props.follow ? classes.FollowButton__followed : classes.FollowButton
      }
      onClick={() => dispatch({ type: "FOLLOW", id: props.id })}
    >
      {props.follow ? (
        <FontAwesomeIcon
          icon={["far", "thumbs-up"]}
          className={classes.FollowButton__name}
        />
      ) : (
        <p className={classes.FollowButton__name}>Follow</p>
      )}
    </div>
  );
};

export default FollowButton;
