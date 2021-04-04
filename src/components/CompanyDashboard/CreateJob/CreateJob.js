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
      <div className={classes.Wrapper}>
        <p className={classes.CreateJob__label}>company name:</p>
        <p className={classes.CreateJob__input}>username</p>
        <ModifyButton type="edit" />
        <ModifyButton  />
      </div>
      <div className={classes.Wrapper}>
        <p className={classes.CreateJob__label}>rep name:</p>
        <p className={classes.CreateJob__input}>Bede Marcos</p>

      </div>
      <div className={classes.Wrapper}>
        <p className={classes.CreateJob__label}>company email:</p>
        <p className={classes.CreateJob__input}>g-unit@gmail.com</p>

      </div>
      {/* <Input name="repName" label="rep name" colorScheme="dark" /> */}
      {/* <Input name="email" label="email" type="email" colorScheme="dark" /> */}
      <Textarea
        placeholder="This description will be added on top of your job posts."
        label="company description"
        colorScheme="dark"
      />
      <Input
        name="website"
        label="website"
        colorScheme="dark"
        placeholder="ex: www.google.com"
      />
      <Input name="industry" label="industry" colorScheme="dark" />
      <Select
        name="size"
        label="size"
        options={["0 - 50", "51 - 100", "100 - 250", "250 - 500", "500+"]}
        values={["xs", "sm", "md", "lg", "xl"]}
      />
      <Input
        name="hq"
        label="HQ"
        colorScheme="dark"
        placeholder="ex: Toronto, Ontario Canada"
      />
      <Input
        name="founded"
        label="founded year"
        colorScheme="dark"
        placeholder="ex: 2020"
      />
      <Button name="Update" />
    </div>
  );
}

export default CreateJob;
