import React from "react";
import classes from "./CompanyLogo.module.css";
import Logo from "../../assets/img/companyLogo.png";

function CompanyLogo(props) {
  return <img src={props.logo} className={classes.CompanyLogo} />;
}

export default CompanyLogo;
