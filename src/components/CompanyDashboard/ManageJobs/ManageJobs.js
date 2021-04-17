import React, { useContext, useEffect } from "react";
import classes from "./ManageJobs.module.css";
import JobCard from "../../JobCard/JobCard";
import uniqid from "uniqid";
import { DataContext } from "../../../context/companies.context";

function ManageJobs(props) {
  const { companies } = useContext(DataContext);
  let [company] = companies.filter((el) => el.name === "Job Inc");

  // useEffect(() => {
  //   company = companies.filter((el) => el.name === "Job Inc");
  // }, [companies]);

  // const showPost = (id) => {
  //   props.history.push(`/companies/${company.id}`);
  // };

  return (
    <div className={classes.ManageJobs}>
      {company.jobs.length === 0 ? (
        <h1>No Jobs Posts Created</h1>
      ) : (
        company.jobs.map((el) => <JobCard employer {...el} key={uniqid()} />)
      )}
    </div>
  );
}

export default ManageJobs;
