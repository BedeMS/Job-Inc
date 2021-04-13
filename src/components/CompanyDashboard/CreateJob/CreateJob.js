import React, { useState } from "react";
import uniqid from "uniqid";
import useWrapper from "../../../hooks/useWrapperHook";
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
  // const [numWrapper, setnumWrapper] = useState(2);
  const [job, handleChange] = useJobHook(jobInit);
  const [section, handleWrapperChange, addSection] = useWrapper();

  return (
    <form className={classes.CreateJob}>
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

// const [section, setSection] = useState([]);

// const handleSection = (obj) => {
//   if (section.length > 0) {
//     let updateSection = section.map((el) =>
//       el.id !== obj.id
//         ? el
//         : { ...el, title: obj.title, description: obj.description }
//     );
//     setSection(updateSection);
//   } else {
//     setSection([obj]);
//   }
// };
