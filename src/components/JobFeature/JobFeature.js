import React from "react";
import classes from "./JobFeature.module.css";
import CompanyLogo from "../../elements/CompanyLogo/CompanyLogo";
import SaveButton from "../../elements/SaveButton/SaveButton";
import { Link } from "react-router-dom";

function JobFeature(props) {
  return (
    <div className={classes.JobFeature}>
      <div className={classes.JobFeature__img}>
        <CompanyLogo />
      </div>
      <div className={classes.JobFeature__info}>
        <Link className={classes.JobFeature__title}>Job Title</Link>
        <Link className={classes.JobFeature__company}>Company</Link>
        <p className={classes.JobFeature__location}>Location</p>
      </div>
      <div className={classes.JobFeature__time}>
        <p className={classes.JobFeature__date}>2 Days ago</p>
        <SaveButton saved={props.saved} />
        <p className={classes.JobFeature__hours}>Full Time</p>
      </div>
    </div>
  );
}

export default JobFeature;
