import React, { useState } from "react";
import Input from "../../../../elements/Input/Input";
import Error from "../../../../elements/Error/Error";
import Textarea from "../../../../elements/Textarea/Textarea";
import classes from "./Wrapper.module.css";

function Wrapper(props) {
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
      {props.errors.wrapper && <Error error={props.errors.wrapper} />}
    </div>
  );
}

export default Wrapper;
