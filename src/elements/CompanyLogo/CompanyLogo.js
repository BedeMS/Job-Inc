import React from "react";
import classes from "./CompanyLogo.module.css";
import Logo from "../../assets/img/jobLogo.png";

function CompanyLogo(props) {
  return <img src={Logo} className={classes.CompanyLogo} />;
}

export default CompanyLogo;
