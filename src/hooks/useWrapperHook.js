import { useState } from "react";
import uniqid from "uniqid";

export default (initialState) => {
  let initSection = [
    {
      id: uniqid(),
    },
    {
      id: uniqid(),
    },
  ];

  initSection.forEach((el) => {
    el[`title${el.id}`] = "";
    el[`description${el.id}`] = "";
  });
  const [section, setSection] = useState(initSection);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newarr = section.map((el) => {
      if (Object.keys(el).includes(name)) {
        el = { ...el, [name]: value };
      }
      return el;
    });

    setSection(newarr);
  };

  const addSection = () => {
    let id = uniqid();
    setSection([
      ...section,
      {
        id,
        [`title${id}`]: "",
        [`description${id}`]: "",
      },
    ]);
  };

  return [section, handleChange, addSection];
};
