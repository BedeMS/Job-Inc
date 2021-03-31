import React from "react";
import classes from "./NavLink.module.css";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    // <Link>
      <p className={classes.NavLink}>{props.name}</p>
    /* </Link> */
  );
};

export default NavLink;
