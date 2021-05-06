import React, { Component, useContext } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Feature from "../../elements/Feature/Feature";
import CompanyFeature from "../../components/CompanyFeature/CompanyFeature";
import uniqid from "uniqid";
import classes from "./BrowseCompanies.module.css";
import { DataContext } from "../../context/companies.context";

function BrowseCompanies(props) {
  const { companies } = useContext(DataContext);
  return (
    <div className={classes.Browse}>
      <Header />
      <SearchBar companies />
      <div className={classes.Browse__features}>
        <Feature
          title="Top Companies"
          className={classes.Browse__features__top}
        >
          {companies.map((el) => (
            <CompanyFeature key={uniqid()} {...el} />
          ))}
        </Feature>
        <Feature title="Companies for You">
          {companies.map((el) => (
            <CompanyFeature key={uniqid()} {...el} />
          ))}
        </Feature>
      </div>
    </div>
  );
}

export default BrowseCompanies;
