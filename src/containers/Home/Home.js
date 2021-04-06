import React, { Component } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Feature from "../../elements/Feature/Feature";
import JobFeature from "../../components/JobFeature/JobFeature";
import uniqid from "uniqid";
import classes from "./Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { featured, handleSave } = this.props;
    return (
      <div className={classes.Home}>
        <Header />
        <SearchBar />
        <div className={classes.Home__features}>
          <Feature title="Featured Jobs for You">
            {featured.map((el) => (
              <JobFeature {...el} key={uniqid()} handleSave={handleSave} />
            ))}
          </Feature>
          <Feature title="Based on Your Recent Search" recentSearch>
            {featured.map((el) => (
              <JobFeature {...el} key={uniqid()} handleSave={handleSave} />
            ))}
          </Feature>
        </div>
      </div>
    );
  }
}

export default Home;
