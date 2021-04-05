import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Confirmation from "./Confirmation/Confirmation";
import EmployerSignUp from "./EmployerSignUp/EmployerSignUp";
import classes from "./Registration.module.css";

function Registration(props) {
  return (
    <div className={classes.Registration}>
      <SignUp />
    </div>
  );
}

export default Registration;
