import React from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import useToggle from "../../hooks/useToggleHook";
import Confirmation from "./Confirmation/Confirmation";
import EmployerSignUp from "./EmployerSignUp/EmployerSignUp";
import classes from "./Registration.module.css";

function Registration({ auth }) {
  const [submitted, toggleSubmitted] = useToggle(false);

  const displayAuth = () => {
    if (auth === "Sign In") {
      return submitted ? (
        <Confirmation confirm={confirm} />
      ) : (
        <SignIn confirm={confirm} />
      );
    } else if (auth === "Sign Up") {
      return submitted ? (
        <Confirmation confirm={confirm} />
      ) : (
        <SignUp confirm={confirm} />
      );
    } else {
      return submitted ? (
        <Confirmation confirm={confirm} />
      ) : (
        <EmployerSignUp confirm={confirm} />
      );
    }
  };

  function confirm() {
    toggleSubmitted();
  }

  return <div className={classes.Registration}>{displayAuth()}</div>;
}

export default Registration;
