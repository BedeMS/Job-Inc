import React from "react";
import classes from "./Logo.module.css";
import jobIncLogo from "../../assets/img/jobLogo.png";

const logo = (props) => {
  return (
    // <div className={classes.Logo}>
    <img className={classes.Logo} src={jobIncLogo} alt="Job Inc Logo" />
    // </div>
  );
};

export default logo;
