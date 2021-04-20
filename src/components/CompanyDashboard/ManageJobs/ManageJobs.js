import React, { useContext, useState } from "react";
import classes from "./ManageJobs.module.css";
import JobCard from "../../JobCard/JobCard";
import EditJob from "../EditJob/EditJob";
import uniqid from "uniqid";
import { DataContext } from "../../../context/companies.context";
import useToggleHook from "../../../hooks/useToggleHook";

function ManageJobs(props) {
  const { companies } = useContext(DataContext);
  let [company] = companies.filter((el) => el.name === "Job Inc");
  const [job, setJob] = useState({});
  const [isEditing, toggle] = useToggleHook(false);

  const showPost = (id) => {
    props.history.push(`/companies/${company.id}`);
  };

  const handleEdit = function (id) {
    setJob(company.jobs.filter((el) => el.id === id));
    toggle();
    // console.log(job);
    // [job] = company.jobs.filter((el) => el.id === id);
  };

  return (
    <div className={classes.ManageJobs}>
      {isEditing ? (
        <EditJob job={job[0]} />
      ) : company.jobs.length === 0 ? (
        <h1>No Jobs Posts Created</h1>
      ) : (
        company.jobs.map((el) => (
          <JobCard
            employer
            showPost={showPost}
            {...el}
            key={uniqid()}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}

export default ManageJobs;
