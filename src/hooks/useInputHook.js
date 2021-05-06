import { useState } from "react";

const useInputHook = (initState) => {
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


export default useInputHook;