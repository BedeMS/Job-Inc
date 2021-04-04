import React from "react";
import classes from "./SavedJobs.module.css";
import JobCard from "../../JobCard/JobCard";

function SavedJobs(props) {
  return <div className={classes.SavedJobs}>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
  </div>;
}

export default SavedJobs;
