import React, { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import JobCard from "../JobCard/JobCard";
import JobPost from "../JobPost/JobPost";
import uniqid from "uniqid";
import classes from "./Company.module.css";
import { DataContext } from "../../context/companies.context";

function Company(props) {
  const { companies } = useContext(DataContext);

  //Get the company provided in the url
  const [company] = companies.filter((el) => el.id === props.match.params.name);

  //Display first job on company list
  let firstJob;
  if (company.jobs.length < 1) {
    firstJob = "";
  } else {
    firstJob = company.jobs[0];
  }

  const [post, setPost] = useState(firstJob);

  const showPost = (id) => {
    const [job] = company.jobs.filter((el) => el.id === id);
    setPost(job);
  };

  return (
    <div className={classes.Company}>
      <Header />
      <SearchBar companies />
      <CompanyDetails {...company} />
      <h1 className={classes.Company__jobs__title}>Company Job Listings</h1>
      {company.jobs.length < 1 ? (
        <h1 className={classes.Company__empty}>
          There are currently no jobs for this profile
        </h1>
      ) : (
        <div className={classes.Company__jobs}>
          <div className={classes.Company__joblistings}>
            {company.jobs.map((el) => (
              <JobCard {...el} key={uniqid()} showPost={showPost} />
            ))}
          </div>
          <JobPost {...post} />
        </div>
      )}
    </div>
  );
}

export default Company;
