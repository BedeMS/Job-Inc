import React from "react";
import CompanyLogo from "../../elements/CompanyLogo/CompanyLogo";
import SaveButton from "../../elements/SaveButton/SaveButton";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import classes from "./JobFeature.module.css";

dayjs.extend(relativeTime);
function JobFeature(props) {
  return (
    <div className={classes.JobFeature}>
      <div className={classes.JobFeature__img}>
        <CompanyLogo logo={props.logo}/>
      </div>
      <div className={classes.JobFeature__info}>
        <Link to={`/companies/${props.companyId}`}className={classes.JobFeature__title}>{props.company}</Link>
        <Link to={`/jobs/${props.id}`} className={classes.JobFeature__company}>{props.title}</Link>
        <p className={classes.JobFeature__location}>{props.location}</p>
      </div>
      <div className={classes.JobFeature__time}>
        <p className={classes.JobFeature__date}>{dayjs().to(props.date)}</p>
        <SaveButton saved={props.saved} id={props.id} handleSave={props.handleSave} />
        <p className={classes.JobFeature__hours}>Full Time</p>
      </div>
    </div>
  );
}

export default JobFeature;
