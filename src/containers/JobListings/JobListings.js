import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobCard from "../../components/JobCard/JobCard";
import JobPost from "../../components/JobPost/JobPost";
import classes from "./JobListings.module.css";

function JobListings(props) {
  // let job;
  let [job] = props.jobs.filter((el) => el.id === props.match.params.id);

  // console.log(company)
  const [post, setPost] = useState(job);

  const showPost = (id) => {
    const [job] = props.jobs.filter((el) => el.id === id);
    console.log(id);
    setPost(job);
  };

  return (
    <div className={classes.JobListing}>
      <Header />
      <SearchBar />
      <div className={classes.JobListing__container}>
        <div className={classes.JobListings}>
          {props.jobs.map((el) => (
            <JobCard
              {...el}
              key={uniqid()}
              showPost={showPost}
              handleSave={props.handleSave}
            />
          ))}
        </div>
        <JobPost {...post} handleSave={props.handleSave} />
      </div>
    </div>
  );
}

export default JobListings;
