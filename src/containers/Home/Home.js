import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Feature from "../../elements/Feature/Feature";
import JobFeature from "../../components/JobFeature/JobFeature";
import uniqid from "uniqid";
import classes from "./Home.module.css";
import { DataContext } from "../../context/companies.context";

function Home() {
  const { featuredJobs } = useContext(DataContext);

  return (
    <div className={classes.Home}>
      <Header />
      <SearchBar />
      <div className={classes.Home__features}>
        <Feature title="Featured Jobs for You">
          {featuredJobs.map((el) => (
            <JobFeature {...el} key={uniqid()} />
          ))}
        </Feature>
        <Feature title="Based on Your Recent Search" recentSearch>
          {featuredJobs.map((el) => (
            <JobFeature {...el} key={uniqid()} />
          ))}
        </Feature>
      </div>
    </div>
  );
}

export default Home;
