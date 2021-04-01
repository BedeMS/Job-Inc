import React from "react";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import classes from "./SearchBar.module.css";

function SearchBar(props) {
  const company = props.companies ? (
    <div className={classes.SearchBar}>
      <Input placeholder="Company Name" label="Company" name="company" />
      <Button name="Search" colorScheme="light" />
    </div>
  ) : (
    <div className={classes.SearchBar}>
      <Input placeholder="Job Title" label="Job" name="jobTitle" />
      <Input placeholder="Location" label="Location" name="location" />
      <Button name="Search" colorScheme="light" />
    </div>
  );
  return company;
}

export default SearchBar;
