import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Feature from "../../elements/Feature/Feature";
import CompanyFeature from "../../components/CompanyFeature/CompanyFeature";
import classes from "./BrowseCompanies.module.css";

class Home extends Component {
  render() {
    return (
      <div className={classes.Browse}>
        <Header />
        <SearchBar companies />
        <div className={classes.Browse__features}>
          <Feature
            title="Top Companies"
            className={classes.Browse__features__top}
          >
            <CompanyFeature followed />
            <CompanyFeature />
          </Feature>
          <Feature title="Companies for You">
            <CompanyFeature />
            <CompanyFeature />
            <CompanyFeature followed />
            <CompanyFeature />
            <CompanyFeature />
            <CompanyFeature />
          </Feature>
        </div>
      </div>
    );
  }
}

export default Home;
