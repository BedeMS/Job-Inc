import React from "react";
import classes from "./SignUp.module.css";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import useFormHook from "../../../hooks/useFormHook";

const initForm = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  password2: "",
};

function SignUp(props) {
  const [values, handleChange] = useFormHook(initForm);
  return (
    <div className={classes.SignUp}>
      <Input
        label="full Name"
        name="fullName"
        value={values.fullName}
        handleChange={handleChange}
        colorScheme="dark"
      />
      <Input
        label="username"
        name="username"
        value={values.username}
        handleChange={handleChange}
        colorScheme="dark"
      />
      <Input
        label="email"
        name="email"
        value={values.email}
        handleChange={handleChange}
        type="email"
        colorScheme="dark"
      />
      <Input
        label="password"
        name="password"
        value={values.password}
        handleChange={handleChange}
        type="password"
        colorScheme="dark"
      />
      <Input
        label="confirm password"
        name="password2"
        value={values.password2}
        handleChange={handleChange}
        type="password"
        colorScheme="dark"
      />
      <Button name="Sign Up" colorScheme="light" />
    </div>
  );
}

export default SignUp;
