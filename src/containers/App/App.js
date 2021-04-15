import { Component } from "react";
import employerData, { createJobs, featuredArr } from "../../data/data";
import JobListings from "../JobListings/JobListings";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import Dashboard from "../Dashboard/Dashboard";
import BrowseCompanies from "../BrowseCompanies/BrowseCompanies";
import Company from "../../components/Company/Company";
import NotFound from "../../components/Error/Error";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(far, fab, fas, faBookmark); 

function App(props) {
  const [companies, dispatch] = useReducer(reducer, employerData.companies)
  
  //   super(props);
  //   this.state = {
  //     companies: employerData.companies,
  //   };
  //   this.handleSave = this.handleSave.bind(this);
  //   this.handleFollow = this.handleFollow.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.jobs = createJobs(employerData.companies);
  //   this.featuredJobs = featuredArr(this.jobs);
  // }

  handleSave(id) {
    const newData = this.state.companies.map((el) => {
      el.jobs = el.jobs.map((el) =>
        el.id === id ? { ...el, saved: !el.saved } : el
      );
      return el;
    });

    this.jobs = this.jobs.map((el) =>
      el.id === id ? { ...el, saved: !el.saved } : el
    );
    this.featuredJobs = this.featuredJobs.map((el) =>
      el.id === id ? { ...el, saved: !el.saved } : el
    );
    this.setState({ companies: newData });
  }

  handleFollow(id) {
    const newData = this.state.companies.map((el) => {
      if (el.id === id) {
        return { ...el, follow: !el.follow };
      }
      return el;
    });
    this.setState({ companies: newData });
  }

  handleSubmit(job) {
    const newData = this.state.companies.map((el) => {
      if (el.name === "Job Inc") {
        job.company = el.name;
        job.logo = el.logo;
        job.companyId = el.id;
        el.jobs.push(job);
        return el;
      }
      return el;
    });

    this.setState({ companies: newData });
  }


  render() {
    const { companies } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home featured={this.featuredJobs} handleSave={this.handleSave} />
          )}
        />
        <Route
          exact
          path="/employers"
          render={(routeprops) => (
            <Dashboard
              {...routeprops}
              company={companies.filter(el => el.name === "Job Inc")}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          exact
          path="/companies"
          render={() => (
            <BrowseCompanies
              featuredCompanies={companies}
              handleFollow={this.handleFollow}
            />
          )}
        />
        <Route
          exact
          path="/companies/:name"
          render={(routeprops) => (
            <Company
              {...routeprops}
              companies={companies}
              handleFollow={this.handleFollow}
              handleSave={this.handleSave}
            />
          )}
        />
        <Route exact path="/auth" render={() => <Auth />} />
        <Route
          exact
          path="/jobs/:id"
          render={(routeprops) => (
            <JobListings
              {...routeprops}
              jobs={this.jobs}
              handleSave={this.handleSave}
            />
          )}
        />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default App;
