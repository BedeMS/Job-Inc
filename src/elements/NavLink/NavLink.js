import React from "react";
import classes from "./NavLink.module.css";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <Link to={props.to} className={classes.NavLink}>
      {props.name}
    </Link>
  );
};

export default NavLink;
