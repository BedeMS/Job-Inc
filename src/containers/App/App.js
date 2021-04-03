import JobListings from "../JobListings/JobListings";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
import Dashboard from "../Dashboard/Dashboard";
import BrowseCompanies from "../BrowseCompanies/BrowseCompanies";
import Company from "../../components/Company/Company";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(far, fab, faBookmark);

function App() {
  return <Dashboard />;
}

export default App;
