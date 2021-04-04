import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Tab from "../../elements/Tab/Tab";
import Textarea from "../../elements/Textarea/Textarea";
import Input from "../../elements/Input/Input";
import classes from "./Dashboard.module.css";
import CreateJob from "../../components/CompanyDashboard/CreateJob/CreateJob";
import EditProfile from "../../components/CompanyDashboard/EditProfile/EditProfile";
import ManageJobs from "../../components/CompanyDashboard/ManageJobs/ManageJobs";

class Dashboard extends Component {
  render() {
    const tabs = this.props.user ? (
      <div className={classes.Board__tab}>
        <Tab active name="My Jobs" />
        <Tab name="My Companies" />
        <Tab name="Edit Profile" />
      </div>
    ) : (
      <div className={classes.Board__tab}>
        <Tab active name="Create Job Post" />
        <Tab name="Manage Jobs" />
        <Tab name="Edit Profile" />
      </div>
    );

    return (
      <div className={classes.Dashboard}>
        <Header />
        <div className={classes.Board}>
          {tabs}
          <div className={classes.Board__panel}>
              <EditProfile />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
