import React from "react";
import classes from "./SignIn.module.css";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";

function SignIn(props) {
  return (
    <div className={classes.SignIn}>
      <Input label="username" name="username" />
      <Input label="password" name="password" />
      <Button  name="Sign In" colorScheme="light" />
    </div>
  );
}

export default SignIn;
