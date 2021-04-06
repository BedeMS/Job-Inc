import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Feature from "../../elements/Feature/Feature";
import CompanyFeature from "../../components/CompanyFeature/CompanyFeature";
import uniqid from "uniqid";
import classes from "./BrowseCompanies.module.css";

class BrowseCompanies extends Component {
  render() {
    const { featuredCompanies, handleFollow } = this.props;
    return (
      <div className={classes.Browse}>
        <Header />
        <SearchBar companies />
        <div className={classes.Browse__features}>
          <Feature
            title="Top Companies"
            className={classes.Browse__features__top}
          >
            {featuredCompanies.map((el) => (
              <CompanyFeature key={uniqid()} {...el} handleFollow={handleFollow} />
            ))}
          </Feature>
          <Feature title="Companies for You">
            {featuredCompanies.map((el) => (
              <CompanyFeature key={uniqid()} {...el} handleFollow={handleFollow} />
            ))}
          </Feature>
        </div>
      </div>
    );
  }
}

export default BrowseCompanies;
