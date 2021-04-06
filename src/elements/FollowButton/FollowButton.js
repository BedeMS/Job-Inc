import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./FollowButton.module.css";

const FollowButton = (props) => {
  const handleClick = () => {
    props.handleFollow(props.id)
  }
  return (
    <div
      className={
        props.follow ? classes.FollowButton__followed : classes.FollowButton
      }
      onClick={handleClick}
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
