import "./App.css";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobCard from "../../components/JobCard/JobCard";
import JobPost from "../../components/JobPost/JobPost";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// import classes from "*.module.css";

library.add(far, faBookmark);

function App() {
  return (
    <div className={"JobListing"}>
      <Header />
      <SearchBar />
      <div className="JobListing__container">
        <div className="JobListings">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <JobPost />
      </div>
    </div>
  );
}

export default App;
