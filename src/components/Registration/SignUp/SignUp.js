import React from "react";
import classes from "./SignUp.module.css";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";

function SignUp(props) {
  return (
    <div className={classes.SignUp}>
      <Input label="full Name" name="fullName" colorScheme="dark" />
      <Input label="username" name="username" colorScheme="dark" />
      <Input label="email" name="email" type="email" colorScheme="dark" />
      <Input
        label="password"
        name="password"
        type="password"
        colorScheme="dark"
      />
      <Input
        label="confirm password"
        name="confirmPassword"
        colorScheme="dark"
      />
      <Button name="Sign Up" colorScheme="light" />
    </div>
  );
}

export default SignUp;
