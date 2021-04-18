import React from "react";
import classes from "./SignUp.module.css";
import Input from "../../../elements/Input/Input";
import Error from "../../../elements/Error/Error";
import Button from "../../../elements/Button/Button";
import useFormHook from "../../../hooks/useFormHook";
import useToggleHook from "../../../hooks/useToggleHook";
import validate from "../../../validateForm/userFormValidation";

const initForm = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  password2: "",
};

function SignUp(props) {
  const [values, handleChange, errors, handleSubmit] = useFormHook(
    initForm,
    props.confirm
  );

  return (
    <form className={classes.SignUp} onSubmit={handleSubmit}>
      <Input
        label="full Name"
        name="fullName"
        value={values.fullName}
        handleChange={handleChange}
        colorScheme="dark"
      />
      {errors.fullName && <Error error={errors.fullName} />}
      <Input
        label="username"
        name="username"
        value={values.username}
        handleChange={handleChange}
        colorScheme="dark"
      />
      {errors.username && <Error error={errors.username} />}

      <Input
        label="email"
        name="email"
        value={values.email}
        handleChange={handleChange}
        type="email"
        colorScheme="dark"
      />
      {errors.email && <Error error={errors.email} />}

      <Input
        label="password"
        name="password"
        value={values.password}
        handleChange={handleChange}
        type="password"
        colorScheme="dark"
      />
      {errors.password && <Error error={errors.password} />}

      <Input
        label="confirm password"
        name="password2"
        value={values.password2}
        handleChange={handleChange}
        type="password"
        colorScheme="dark"
      />
      {errors.password2 && <Error error={errors.password2} />}

      <button type="submit">Sign Up</button>
      {/* <Button name="Sign Up" colorScheme="light" /> */}
    </form>
  );
}

export default SignUp;
