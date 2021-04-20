import { useState } from "react";
import uniqid from "uniqid";

export default (initialState) => {
  // create two object based on the amount of sections available on the page
  let initSection = [
    {
      id: uniqid(),
    },
    {
      id: uniqid(),
    },
  ];

  // give each object a title and a description key with its id.
  // why? b/c we want that title and desc to be together.
  initSection.forEach((el) => {
    el[`title${el.id}`] = "";
    el[`description${el.id}`] = "";
  });

  // initialize state with these two objects
  const [section, setSection] = useState(initSection);

  // to control the input, we identify the object and then the name
  // of the input to alter.
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

  const clearId = () => {
    const newarr = section.map((el) => {
      el = {
        id: el.id,
        title: el[`title${el.id}`],
        description: el[`description${el.id}`],
      };
      return el;
    });
    return newarr;
  };

  return [section, handleChange, addSection, clearId];
};
