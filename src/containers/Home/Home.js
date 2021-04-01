import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Feature from "../../elements/Feature/Feature";
import classes from "./Home.module.css";
import JobFeature from "../../components/JobFeature/JobFeature";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Header />
        <SearchBar />
        <div className={classes.Home__features}>
          <Feature title="Featured Jobs for You">
            <JobFeature />
          </Feature>
          <Feature title="Based on Your Recent Search" recentSearch>
            <JobFeature />
          </Feature>
          {/* <Feature title="Based on Your Recent Search" /> */}
        </div>
      </div>
    );
  }
}

export default Home;
