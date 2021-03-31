import React from "react";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import classes from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div className={classes.SearchBar}>
      <Input placeholder="Job Title" label="Job" name="jobTitle" />
      <Input placeholder="Location" label="Location" name="location" />
      <Button name="Search" colorScheme="light" />
    </div>
  );
}

export default SearchBar;
