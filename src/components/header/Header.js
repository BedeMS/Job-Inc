import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import NavLink from "../../elements/NavLink/NavLink";
import Button from "../../elements/Button/Button";
import classes from "./Header.module.css";

const header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__left}>
        <Link to="/">
          <Logo />
        </Link>
        <NavLink name="Employers" to="/employers" />
      </div>
      <div className={classes.Header__right}>
        <NavLink name="Search Jobs" to="/" />
        <NavLink name="Browse Companies" to="/companies" />
        <Button link to="/auth" name="Sign Up" />
      </div>
    </div>
  );
};

export default header;
