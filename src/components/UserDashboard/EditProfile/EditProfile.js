import React from "react";
import classes from "./EditProfile.module.css";
import ModifyButton from "../../../elements/ModifyButton/ModifyButton";
import Button from "../../../elements/Button/Button";

function EditProfile(props) {
  return (
    <div className={classes.EditProfile}>
      <div className={classes.Wrapper}>
        <p className={classes.EditProfile__label}>username:</p>
        <p className={classes.EditProfile__input}>Username</p>
      </div>
      <div className={classes.Wrapper}>
        <p className={classes.EditProfile__label}>email:</p>
        <p className={classes.EditProfile__input}>google@gmail.com</p>
      </div>
      <div className={classes.Wrapper}>
        <Button name="Password Reset" />
      </div>
    </div>
  );
}

export default EditProfile;
