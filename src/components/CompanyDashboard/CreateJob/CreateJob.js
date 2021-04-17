import React, { useContext } from "react";
import uniqid from "uniqid";
import useWrapper from "../../../hooks/useWrapperHook";
import useFormHook from "../../../hooks/useFormHook";
import classes from "./CreateJob.module.css";
import Input from "../../../elements/Input/Input";
import Select from "../../../elements/Select/Select";
import Button from "../../../elements/Button/Button";
import Wrapper from "./Wrapper/Wrapper";
import { DataContext } from "../../../context/companies.context";

function CreateJob(props) {
  const { dispatch } = useContext(DataContext);
  const jobInit = {
    date: new Date().toLocaleDateString(),
    saved: false,
    id: uniqid(),
    title: "",
    location: "",
    type: "", 
  };
  const [job, handleChange] = useFormHook(jobInit);
  const [section, handleWrapperChange, addSection, clearId] = useWrapper();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSection = clearId();
    job.sections = newSection;
    dispatch({type: "ADD", job: job})
    props.setTab("Manage Jobs");
  };

  return (
    <form className={classes.CreateJob} onSubmit={handleSubmit}>
      <Input
        label="Job Title"
        placeholder="Customer Service"
        name="title"
        colorScheme="dark"
        handleChange={handleChange}
        value={job.title}
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
        name="type"
        options={["Full Time", "Part Time", "On Call"]}
        values={["Full Time", "Part Time", "On Call"]}
        handleChange={handleChange}
        value={job.type}
      />

      {section.map((el) => (
        <Wrapper
          key={el.id}
          id={el.id}
          title={el[`title${el.id}`]}
          description={el[`description${el.id}`]}
          handleChange={handleWrapperChange}
        />
      ))}

      <div className={classes.Wrapper}>
        <Button
          name="Add Section"
          height="short"
          colorScheme="light"
          handleClick={() => addSection()}
        />
      </div>
      <div className={classes.Wrapper}>
        <button className={classes.button} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateJob;
