import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Tab from "../../elements/Tab/Tab";
import classes from "./Dashboard.module.css";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <Header />
        <div className={classes.Board}>
            <div className={classes.Board__tab}>
                <Tab active name="Create Job Post" />
                <Tab name="Edit Profile"/>
                <Tab name="Create Job Post" />
            </div>
            <div className={classes.Board__panel}>

            </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
