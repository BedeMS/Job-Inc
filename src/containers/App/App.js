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

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/companies" render={() => <BrowseCompanies />} />
      <Route
        exact
        path="/companies/:name"
        render={(routeprops) => <Company {...routeprops} />}
      />
      <Route exact path="/auth" render={() => <Auth />} />
      <Route exact path="/jobs" render={() => <JobListings />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}

export default App;
