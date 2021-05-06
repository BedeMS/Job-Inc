import { getName } from "../helper/helper";

export function checkRequired(value) {
  const errors = {};

  Object.entries(value).forEach(([key, value]) => {
    if (value === "") {
      errors[key] = `${getName(key)} is required`;
    }
  });

  return errors;
}

export function checkSection(sections) {
  //   let errors = {};
  const sectionsEmpty = [];

  sections.forEach((el) => {
    const title = el[`title${el.id}`];
    const desc = el[`description${el.id}`];
    if (title === "" && desc === "") {
      sectionsEmpty.push("empty");
    } else if ((title !== "" && desc === "") || (title === "" && desc !== "")) {
      sectionsEmpty.push("incomplete");
    }
  });

  if (sectionsEmpty.length === sections.length) {
    if (sectionsEmpty.includes("incomplete")) {
      return "Both Title and Description must be completed on a Section";
    } else {
      return "At least one of these sections have to be fully completed";
    }
  }
  return;
}

