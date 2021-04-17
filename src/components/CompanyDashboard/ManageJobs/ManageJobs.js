import React, { useContext } from "react";
import classes from "./ManageJobs.module.css";
import JobCard from "../../JobCard/JobCard";
import uniqid from "uniqid";
import { DataContext } from "../../../context/companies.context";

function ManageJobs(props) {
  const { companies } = useContext(DataContext);
  const [company] = companies.filter((el) => el.name === "Job Inc");

  const showPost = (id) => {
    props.history.push(`/companies/${company.id}`);
  };

  return (
    <div className={classes.ManageJobs}>
      {company.jobs.length === 0 ? (
        <h1>No Jobs Posts Created</h1>
      ) : (
        company.jobs.map((el) => (
          <JobCard employer showPost={showPost} {...el} key={uniqid()} />
        ))
      )}
    </div>
  );
}

export default ManageJobs;
