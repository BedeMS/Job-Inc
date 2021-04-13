import React from "react";
import classes from "./ManageJobs.module.css";
import JobCard from "../../JobCard/JobCard";
import uniqid from "uniqid";

function ManageJobs(props) {
  return (
    <div className={classes.ManageJobs}>
      {props.jobs.length === 0 ? (
        <h1>No Jobs Posts Created</h1>
      ) : (
        props.jobs.map((el) => <JobCard employer {...el} key={uniqid()} />)
      )}
    </div>
  );
}

export default ManageJobs;
