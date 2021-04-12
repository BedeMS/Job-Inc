import { useState } from "react";

export default (initVal) => {
  const job = initVal;
  const [jobState, setState] = useState(job);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // jobState[name] = value;
    setState({...jobState, [name]: value});
  };

  return [jobState, handleChange];
};
