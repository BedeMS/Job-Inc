import React, { useContext, useState } from "react";
import Input from "../../../elements/Input/Input";
import Select from "../../../elements/Select/Select";
import Error from "../../../elements/Error/Error";
import Button from "../../../elements/Button/Button";
import Submit from "../../../elements/Button/Submit/Submit";
import Wrapper from "../CreateJob/Wrapper/Wrapper";
import useFormHook from "../../../hooks/useFormHook";
import classes from "./EditJob.module.css";
import useWrapper from "../../../hooks/useWrapperHook";
import {
  checkRequired,
  checkSection,
} from "../../../validateForm/jobFormValidation";
import { DataContext } from "../../../context/companies.context";

function EditJob({ job, toggle }) {
  const { dispatch } = useContext(DataContext);
  const [jobEditted, handleChange] = useFormHook(job);
  const [section, handleWrapperChange, addSection, clearId] = useWrapper(
    job.sections
  );
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobErrors = checkRequired(jobEditted);
    const wrapperErrors = checkSection(section);
    if (Object.keys(jobErrors).length > 0 || wrapperErrors) {
      setErrors({ ...jobErrors, wrapper: wrapperErrors });
    } else {
      const newSection = clearId();
      job.sections = newSection;
      dispatch({ type: "EDIT", id: jobEditted.id, newJob: jobEditted });
      toggle();
    }
  };

  return (
    <form className={classes.EditJob} onSubmit={handleSubmit}>
      <Input
        label="Job Title"
        placeholder="Customer Service"
        name="title"
        colorScheme="dark"
        handleChange={handleChange}
        value={jobEditted.title}
      />
      {errors.title && <Error error={errors.title} />}

      <Input
        label="Location"
        placeholder="Toronto, ON"
        name="location"
        colorScheme="dark"
        handleChange={handleChange}
        value={jobEditted.location}
      />
      {errors.location && <Error error={errors.location} />}

      <Select
        label="Job Type"
        name="type"
        options={["Full Time", "Part Time", "On Call"]}
        values={["Full Time", "Part Time", "On Call"]}
        handleChange={handleChange}
        value={jobEditted.type}
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

export default EditJob;
