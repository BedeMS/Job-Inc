import { useState, useEffect } from "react";
import useToggleHook from "../hooks/useToggleHook";
import validate from "../validateForm/userFormValidation";

const useFormHook = (initVal, callback) => {
  const [values, setState] = useState(initVal);
  const [errors, setErrors] = useState({});
  const [submit, isSubmitting] = useToggleHook(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(values));
    isSubmitting();
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      callback();
    }
  }, [errors]);

  return [values, handleChange, errors, handleSubmit];
};


export default useFormHook;