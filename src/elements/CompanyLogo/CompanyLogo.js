import React from "react";
import classes from "./CompanyLogo.module.css";

function CompanyLogo(props) {
  return <img src={props.logo} alt="Company Logo"  className={classes.CompanyLogo} />;
}

export default CompanyLogo;
