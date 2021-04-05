import React from "react";
import classes from "./CreateJob.module.css";
import Input from "../../../elements/Input/Input";
import Textarea from "../../../elements/Textarea/Textarea";
import Select from "../../../elements/Select/Select";
import Button from "../../../elements/Button/Button";
import ModifyButton from "../../../elements/ModifyButton/ModifyButton";

function CreateJob(props) {
  return (
    <div className={classes.CreateJob}>
      <Input label="Job Title" name="jobTitle" colorScheme="dark" />
      <Input label="Location" name="location" colorScheme="dark" />
      <Input label="Job Type" name="type" colorScheme="dark" />
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: Job Description" />
        <Textarea />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: Salary/Responsibilities" />
        <Textarea />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: What we offer" />
        <Textarea />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: Qualifications/Benefits" />
        <Textarea />
      </div>
      <div className={classes.Wrapper}>
        <Button name="Add Section" height="short" colorScheme="light" />
      </div>
      <div className={classes.Wrapper}>
        <Button name="Submit" />
      </div>
    </div>
  );
}

export default CreateJob;
