import React, { useContext, useState } from "react";
import uniqid from "uniqid";
import useWrapper from "../../../hooks/useWrapperHook";
import {
  checkRequired,
  checkSection,
} from "../../../validateForm/jobFormValidation";
import useFormHook from "../../../hooks/useFormHook";
import classes from "./CreateJob.module.css";
import Input from "../../../elements/Input/Input";
import Select from "../../../elements/Select/Select";
import Error from "../../../elements/Error/Error";
import Button from "../../../elements/Button/Button";
import Submit from "../../../elements/Button/Submit/Submit";
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
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobErrors = checkRequired(job);
    const wrapperErrors = checkSection(section);
    if (Object.keys(jobErrors).length > 0 || wrapperErrors) {
      setErrors({ ...jobErrors, wrapper: wrapperErrors });
    } else {
      const newSection = clearId();
      job.sections = newSection;
      dispatch({ type: "ADD", job: job });
      props.setTab("Manage Jobs");
    }
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
      {errors.title && <Error error={errors.title} />}

      <Input
        label="Location"
        placeholder="Toronto, ON"
        name="location"
        colorScheme="dark"
        handleChange={handleChange}
        value={job.location}
      />
      {errors.location && <Error error={errors.location} />}

      <Select
        label="Job Type"
        name="type"
        options={["Full Time", "Part Time", "On Call"]}
        values={["Full Time", "Part Time", "On Call"]}
        handleChange={handleChange}
        value={job.type}
      />
      {errors.type && <Error error={errors.type} />}

      {section.map((el) => (
        <Wrapper
          key={el.id}
          id={el.id}
          title={el[`title${el.id}`]}
          description={el[`description${el.id}`]}
          handleChange={handleWrapperChange}
          errors={errors}
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
        <Submit name="Submit" />
      </div>
    </form>
  );
}

export default CreateJob;
