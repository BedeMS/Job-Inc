import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import classes from "./Auth.module.css";

function User(props) {
  const [state, setstate] = useState("Sign In");
  const handleClick = (e) => {
    if (e.target.textContent === "Sign In") {
      setstate("Sign In");
    } else if (e.target.textContent === "Sign Up") {
      setstate("Sign Up");
    } else {
      setstate("Employer Sign Up");
    }
  };
  return (
    <div className={classes.Auth}>
      <Header />
      <div className={classes.Auth__registration}>
        <div className={classes.Auth__registration__type} onClick={handleClick}>
          <p
            className={`${classes.Auth__signIn} ${
              state === "Sign In" ? classes.active : ""
            }`}
          >
            Sign In
          </p>
          <p
            className={`${classes.Auth__signUp} ${
              state === "Sign Up" ? classes.active : ""
            }`}
          >
            Sign Up
          </p>
          <p
            className={`${classes.Auth__employerSignUp} ${
              state === "Employer Sign Up" ? classes.active : ""
            }`}
          >
            Employer Sign Up
          </p>
        </div>

        <Registration auth={state} />
      </div>
    </div>
  );
}

export default User;
