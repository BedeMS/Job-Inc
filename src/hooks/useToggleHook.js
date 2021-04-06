import { useState } from "react";

export default function (initVal) {
  const [state, setState] = useState(initVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
