import React, { useState } from "react";
import uniqid from "uniqid";
import Header from "../../components/Header/Header";
import Tab from "../../elements/Tab/Tab";
import classes from "./Dashboard.module.css";
import CreateJob from "../../components/CompanyDashboard/CreateJob/CreateJob";
import EmployerEditProfile from "../../components/CompanyDashboard/EditProfile/EditProfile";
import ManageJobs from "../../components/CompanyDashboard/ManageJobs/ManageJobs";
import UserEditProfile from "../../components/UserDashboard/EditProfile/EditProfile";
import SavedCompanies from "../../components/UserDashboard/SavedCompanies/SavedCompanies";
import SavedJobs from "../../components/UserDashboard/SavedJobs/SavedJobs";
import EditProfile from "../../components/CompanyDashboard/EditProfile/EditProfile";

const Dashboard = function (props) {
  const profile = props.user
    ? ["My Jobs", "My Companies", "Edit Profile"]
    : ["Create Job Post", "Manage Jobs", "Edit Profile"];
  const [tab, setTab] = useState(profile[0]);

  const displayTab = (name) => {
    setTab(name);
  };

  const panel = () => {
    if (tab === "My Jobs") {
      return <SavedJobs />;
    } else if (tab === "My Companies") {
      return <SavedCompanies />;
    } else if (tab === "Edit Profile") {
      return <UserEditProfile />;
    } else if (tab === "Create Job Post") {
      return <CreateJob />;
    } else if (tab === "Manage Jobs") {
      return <ManageJobs />;
    } else {
      return <EditProfile />;
    }
  };

  const tabs = profile.map((el, i) => (
    <Tab key={uniqid()} active={tab === el} name={el} display={displayTab} />
  ));

  return (
    <div className={classes.Dashboard}>
      <Header />
      <div className={classes.Board}>
        <div className={classes.Board__tab}>{tabs}</div>
        <div className={classes.Board__panel}>{panel()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
