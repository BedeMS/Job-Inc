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
      <Input label="Job Title" placeholder="Customer Service" name="jobTitle" colorScheme="dark" />
      <Input label="Location" placeholder="Toronto, ON" name="location" colorScheme="dark" />
      {/* <Input label="Job Type" placeholder="Customer Service" name="type" colorScheme="dark" /> */}
      <Select label="Job Type" options={["Full Time", "Part Time", "On Call"]} values={["Full Time", "Part Time", "On Call"]} />
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: Job Description" name="title" />
        <Textarea name="description" />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: Salary/Responsibilities" name="title" />
        <Textarea name="description" />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: What we offer" name="title" />
        <Textarea name="description"/>
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
