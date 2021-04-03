import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Tab from "../../elements/Tab/Tab";
import Textarea from "../../elements/Textarea/Textarea";
import Input from "../../elements/Input/Input";
import classes from "./Dashboard.module.css";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <Header />
        <div className={classes.Board}>
          <div className={classes.Board__tab}>
            <Tab active name="Create Job Post" />
            <Tab name="Edit Profile" />
            <Tab name="Create Job Post" />
          </div>
          <div className={classes.Board__panel}>
            <Textarea label="Name" name="responsibility" />
            <Input name="quality" placeholder="Name Section ex: Qualifications / Salary"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
