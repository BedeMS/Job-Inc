import React, { useState } from "react";
import Input from "../../../../elements/Input/Input";
import Textarea from "../../../../elements/Textarea/Textarea";
import classes from "./Wrapper.module.css";

function Wrapper(props) {
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");

  //   const obj = {
  //     id: props.id,
  //     title,
  //     description,
  //   };

  //   const handleChange = (e) => {
  //     let { name, value } = e.target;
  //     if (name === "title") {
  //       setTitle(value);
  //     } else {
  //       setDescription(value);
  //     }
  //   };

  // handleSubmit = () => {
  //     console.log("hi");
  // }

  return (
    <div className={`${classes.Wrapper} wrap`}>
      <Input
        placeholder="Section Title Ex: Job Description"
        name={`title${props.id}`}
        handleChange={props.handleChange}
        value={props.title}
      />
      <Textarea
        name={`description${props.id}`}
        handleChange={props.handleChange}
        value={props.description}
      />
    </div>
  );
}

export default Wrapper;

{
  /* <div className={classes.Wrapper}>
        <Input placeholder="Ex: Job Description" name="title" />
        <Textarea name="description" />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: Salary/Responsibilities" name="title" />
        <Textarea name="description" />
      </div>
      <div className={classes.Wrapper}>
        <Input placeholder="Ex: What we offer" name="title" />
        <Textarea name="description" />
      </div> */
}
