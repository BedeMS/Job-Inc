import { useState } from "react";

export default (initState) => {
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };

  const reset = (e) => {
    setState("");
  };

  return [state, handleChange, reset];
};
