import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import classes from "./Company.module.css";

function Company(props) {
  return (
    <div className={classes.Company}>
      <Header />
      <SearchBar companies />
      <CompanyDetails />
    </div>
  );
}

export default Company;
