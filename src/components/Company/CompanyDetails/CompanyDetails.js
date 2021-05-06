import React from "react";
import classes from "./CompanyDetails.module.css";
import CompanyLogo from "../../../elements/CompanyLogo/CompanyLogo";
import FollowButton from "../../../elements/FollowButton/FollowButton";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import CompanyDescription from "../CompanyDescription/CompanyDescription";

function CompanyDetails(props) {
  return (
    <div className={classes.CompanyDetails}>
      {props.banner ? (
        <img
          className={classes.CompanyDetails__banner}
          src={props.banner}
          alt="Company Banner"
        />
      ) : (
        ""
      )}
      <div className={classes.CompanyDetails__header}>
        <div className={classes.CompanyDetails__header__logo}>
          <CompanyLogo logo={props.logo} />
        </div>
        <h1 className={classes.CompanyDetails__header__title}>{props.name}</h1>
        <FollowButton id={props.id} follow={props.follow} />
      </div>
      {/* loop through the companies info given and display it. */}
      {/* call the component with the array passed down */}
      <CompanyInfo info={props.info} />
      <CompanyDescription />
    </div>
  );
}

export default CompanyDetails;
