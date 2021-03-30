import React from "react";
import classes from "./NavLink.module.css";

const NavLink = (props) => {
  return <p className={classes.NavLink}>{props.name}</p>;
};

export default NavLink;
