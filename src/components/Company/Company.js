import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import JobCard from "../JobCard/JobCard";
import JobPost from "../JobPost/JobPost";
import classes from "./Company.module.css";

function Company(props) {
  return (
    <div className={classes.Company}>
      <Header />
      <SearchBar companies />
      <CompanyDetails />
      <h1 className={classes.Company__jobs__title}>Company Job Listings</h1>
      <div className={classes.Company__jobs}>
        <div className={classes.Company__joblistings}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <JobPost />
      </div>
    </div>
  );
}

export default Company;
