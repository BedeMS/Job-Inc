import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import classes from "./Auth.module.css";

class User extends Component {
  render() {
    return (
      <div className={classes.Auth}>
        <Header />
        <div className={classes.Auth__registration}>
          <div className={classes.Auth__registration__type}>
            <p className={`${classes.Auth__signIn} ${classes.active}`}>Sign In</p>
            <p className={`${classes.Auth__signUp}`}>
              Sign Up
            </p>
            <p className={classes.Auth__employerSignUp}>Employer Sign Up</p>
          </div>
          <Registration />
        </div>
      </div>
    );
  }
}

export default User;
