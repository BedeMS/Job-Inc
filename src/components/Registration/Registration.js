import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Confirmation from "./Confirmation/Confirmation";
import EmployerSignUp from "./EmployerSignUp/EmployerSignUp";
import classes from "./Registration.module.css";

function Registration({auth}) {
  const displayAuth = () => {
    if(auth === "Sign In") {
      return <SignIn />;
    } else if (auth === "Sign Up") {
      return <SignUp />;
    } else {
      return <EmployerSignUp />;
    }
  };
  return <div className={classes.Registration}>{displayAuth()}</div>;
}

export default Registration;
