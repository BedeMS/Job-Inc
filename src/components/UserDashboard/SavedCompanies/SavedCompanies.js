import React from "react";
import classes from "./SavedCompanies.module.css";
import CompanyFeatured from "../../CompanyFeature/CompanyFeature";

function SavedCompanies(props) {
  return <div className={classes.SavedCompanies}>
    <CompanyFeatured />
    <CompanyFeatured />
    <CompanyFeatured />
    <CompanyFeatured />
  </div>;
}

export default SavedCompanies;
