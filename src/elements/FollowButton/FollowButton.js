import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./FollowButton.module.css";

const FollowButton = (props) => {
  return (
    <div
      className={
        props.followed ? classes.FollowButton__followed : classes.FollowButton
      }
    >
      {props.followed ? (
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
