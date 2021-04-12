import React, { useState } from "react";
import uniqid from "uniqid";
import useInput from "../../../hooks/useInputHook";
import useJobHook from "../../../hooks/useJobHook";
import classes from "./CreateJob.module.css";
import Input from "../../../elements/Input/Input";
import Select from "../../../elements/Select/Select";
import Button from "../../../elements/Button/Button";
import Wrapper from "./Wrapper/Wrapper";

function CreateJob(props) {
  const jobInit = {
    date: new Date().toLocaleDateString(),
    saved: false,
    id: uniqid(),
    jobTitle: "",
    location: "",
    jobType: "",
    section: [],
  };
  const [numWrapper, setnumWrapper] = useState(2);
  const [job, handleChange] = useJobHook(jobInit);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
  };

  return (
    <form className={classes.CreateJob} onSubmit={handleSubmit}>
      <Input
        label="Job Title"
        placeholder="Customer Service"
        name="jobTitle"
        colorScheme="dark"
        handleChange={handleChange}
        value={job.jobTitle}
      />
      <Input
        label="Location"
        placeholder="Toronto, ON"
        name="location"
        colorScheme="dark"
        handleChange={handleChange}
        value={job.location}
      />
      <Select
        label="Job Type"
        name="jobType"
        options={["Full Time", "Part Time", "On Call"]}
        values={["Full Time", "Part Time", "On Call"]}
        handleChange={handleChange}
        value={job.jobType}
      />

      {Array(numWrapper)
        .fill()
        .map((el) => {
          return <Wrapper key={uniqid()} />;
        })}

      <div className={classes.Wrapper}>
        <Button
          name="Add Section"
          height="short"
          colorScheme="light"
          handleClick={() => setnumWrapper(numWrapper + 1)}
        />
      </div>
      <div className={classes.Wrapper}>
        <button className={classes.button} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CreateJob;
