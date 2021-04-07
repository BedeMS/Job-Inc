import React, {useState} from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import JobCard from "../JobCard/JobCard";
import JobPost from "../JobPost/JobPost";
import uniqid from "uniqid";
import classes from "./Company.module.css";

function Company(props) {
  const [company] = props.companies.filter(
    (el) => el.id === props.match.params.name
  );
  // console.log(company)

  const [post, setPost] = useState(company.jobs[0]);

  const showPost = (id) => {
    const [job] = company.jobs.filter((el) => el.id === id);
    setPost(job);
  };

  return (
    <div className={classes.Company}>
      <Header />
      <SearchBar companies />
      <CompanyDetails {...company} handleFollow={props.handleFollow} />
      <h1 className={classes.Company__jobs__title}>Company Job Listings</h1>
      <div className={classes.Company__jobs}>
        <div className={classes.Company__joblistings}>
          {company.jobs.map((el) => (
            <JobCard
              {...el}
              key={uniqid()}
              handleSave={props.handleSave}
              showPost={showPost}
            />
          ))}
        </div>
        <JobPost handleSave={props.handleSave} {...post} />
      </div>
    </div>
  );
}

export default Company;
