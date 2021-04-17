import { useState } from "react";

export default (initVal) => {
  // const job = initVal;
  const [values, setState] = useState(initVal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // jobState[name] = value;
    setState({ ...values, [name]: value });
  };

  return [values, handleChange];
};
