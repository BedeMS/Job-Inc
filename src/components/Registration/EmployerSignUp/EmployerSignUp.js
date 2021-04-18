import React from "react";
import classes from "./EmployerSignUp.module.css";
import Input from "../../../elements/Input/Input";
import Button from "../../../elements/Button/Button";
import Error from "../../../elements/Error/Error";
import useFormHook from "../../../hooks/useFormHook";

const initForm = {
  fullName: "",
  company: "",
  email: "",
  password: "",
  password2: "",
};

function SignUp(props) {
  const [values, handleChange, errors, handleSubmit] = useFormHook(
    initForm,
    props.isSubmitted
  );

  return (
    <form className={classes.EmployerSignUp} onSubmit={handleSubmit}>
      <Input
        label="rep name"
        name="fullName"
        value={values.fullName}
        handleChange={handleChange}
        colorScheme="dark"
      />
      {errors.fullName && <Error error={errors.fullName} />}
      <Input
        label="company"
        name="company"
        value={values.company}
        handleChange={handleChange}
        colorScheme="dark"
      />
      {errors.company && <Error error={errors.company} />}

      <Input
        label="company email"
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
