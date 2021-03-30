import React from "react";
import classes from "./Header.module.css";
import Logo from "../../elements/Logo/Logo";
import NavLink from "../../elements/NavLink/NavLink";
import Button from "../../elements/Button/Button";

const header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__left}>
        <Logo />
        <NavLink name="Employers" />
      </div>
      <div className={classes.Header__right}>
        <NavLink name="Search Jobs" />
        <NavLink name="Browse Companies" />
        <Button name="Sign Up" />
      </div>
    </div>
  );
};

export default header;
