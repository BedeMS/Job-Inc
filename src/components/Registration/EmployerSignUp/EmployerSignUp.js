import React from "react";
import classes from "./EmployerSignUp.module.css";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";

function SignUp(props) {
  return (
    <div className={classes.EmployerSignUp}>
      <Input label="rep name" type="text" name="fullName" colorScheme="dark" />
      <Input label="company" type="text" name="company" colorScheme="dark" />
      <Input
        label="company email"
        name="email"
        type="email"
        colorScheme="dark"
      />
      <Input
        label="password"
        name="password"
        type="password"
        colorScheme="dark"
      />
      <Input
        label="confirm password"
        name="confirmPassword"
        type="password"
        colorScheme="dark"
      />
      <Button name="Sign Up" colorScheme="light" />
    </div>
  );
}

export default SignUp;
