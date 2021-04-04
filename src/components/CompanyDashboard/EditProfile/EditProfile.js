import React from "react";
import classes from "./EditProfile.module.css";
import Input from "../../../elements/Input/Input";
import Textarea from "../../../elements/Textarea/Textarea";
import Select from "../../../elements/Select/Select";
import Button from "../../../elements/Button/Button";
import ModifyButton from "../../../elements/ModifyButton/ModifyButton";

function EditProfile(props) {
  return (
    <div className={classes.EditProfile}>
      <div className={classes.Wrapper}>
        <p className={classes.EditProfile__label}>company name:</p>
        <p className={classes.EditProfile__input}>username</p>
        <ModifyButton type="edit" />
        <ModifyButton />
      </div>
      <div className={classes.Wrapper}>
        <p className={classes.EditProfile__label}>rep name:</p>
        <p className={classes.EditProfile__input}>Bede Marcos</p>
        <ModifyButton type="edit" />
        <ModifyButton />
      </div>
      <div className={classes.Wrapper}>
        <p className={classes.EditProfile__label}>company email:</p>
        <p className={classes.EditProfile__input}>g-unit@gmail.com</p>
        <ModifyButton type="edit" />
        <ModifyButton />
      </div>
      <div className={classes.Wrapper}>
        <Button name="Password Reset" />
      </div>
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

export default EditProfile;
