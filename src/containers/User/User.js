import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import classes from "./User.module.css";

class User extends Component {
  render() {
    return (
      <div className={classes.User}>
        <Header />
        <div className={classes.User__registration}>
          <div className={classes.User__registration__type}>
            <p className={`${classes.User__signIn} ${classes.active}`}>Sign In</p>
            <p className={`${classes.User__signUp}`}>
              Sign Up
            </p>
            <p className={classes.User__employerSignUp}>Employer Sign Up</p>
          </div>
          <Registration />
        </div>
      </div>
    );
  }
}

export default User;
