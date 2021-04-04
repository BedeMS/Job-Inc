import React from "react";
import classes from "./ManageJobs.module.css";
import JobCard from "../../JobCard/JobCard";
import Input from "../../../elements/Input/Input";
import Textarea from "../../../elements/Textarea/Textarea";
import Select from "../../../elements/Select/Select";
import Button from "../../../elements/Button/Button";
import ModifyButton from "../../../elements/ModifyButton/ModifyButton";

function ManageJobs(props) {
  return <div className={classes.ManageJobs}>
      <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>        <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>        <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>        <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>        <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>        <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>        <JobCard employer/>
      <JobCard employer/>
      <JobCard employer/>  
  </div>;
}

export default ManageJobs;
