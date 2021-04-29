import React, { useState, useContext } from "react";
import uniqid from "uniqid";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobCard from "../../components/JobCard/JobCard";
import JobPost from "../../components/JobPost/JobPost";
import classes from "./JobListings.module.css";
import useToggle from "../../hooks/useToggleHook";
import { DataContext } from "../../context/companies.context";

function JobListings(props) {
  const { jobs } = useContext(DataContext);
  // let job;
  let [job] = jobs.filter((el) => el.id === props.match.params.id);

  
  // **** THIS CODE IS BEING REPEATED Make Edit FROM COMPANY PAGE
  const [post, setPost] = useState(job);

  const [display, toggle] = useToggle(false);

  const showPost = (id) => {
    const [job] = jobs.filter((el) => el.id === id);
    setPost(job);
    toggle();
  };

  return (
    <div className={classes.JobListing}>
      <Header />
      <SearchBar />
      <div className={classes.JobListing__container}>
        <div className={classes.JobListings}>
          {jobs.map((el) => (
            <JobCard {...el} key={uniqid()} showPost={showPost} />
          ))}
        </div>
        <JobPost {...post} display={display} toggle={toggle} />
      </div>
    </div>
  );
}

export default JobListings;
