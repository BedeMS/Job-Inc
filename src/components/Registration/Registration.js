import React from "react";
import SignIn from "./SignIn/SignIn";
import classes from "./Registration.module.css";

function Registration(props) {
  return (
    <div className={classes.Registration}>
      <SignIn />
    </div>
  );
}

export default Registration;
