import { Component } from "react";
import employerData from "../../data/data";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredJobs: employerData.featuredJobs,
      featuredCompanies: employerData.featuredCompanies,
      jobs: employerData.jobs,
      companies: employerData.companies,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleSave(id) {
    const newData = this.state.featuredJobs.map((el) => {
      if (el.id === id) {
        return { ...el, saved: !el.saved };
      }
      return el;
    });
    this.setState({ featuredJobs: newData });
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

  render() {
    const { featuredJobs, featuredCompanies, companies, jobs } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home featured={featuredJobs} handleSave={this.handleSave} />
          )}
        />
        <Route exact path="/employers" render={() => <Dashboard />} />
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
        <Route exact path="/jobs" render={() => <JobListings />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default App;
