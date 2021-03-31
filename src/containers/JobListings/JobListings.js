import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobCard from "../../components/JobCard/JobCard";
import JobPost from "../../components/JobPost/JobPost";
import classes from "./JobListings.module.css";

class JobListings extends Component {
  render() {
    return (
      <div className={classes.JobListing}>
        <Header />
        <SearchBar />
        <div className={classes.JobListing__container}>
          <div className={classes.JobListings}>
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
}

export default JobListings;
