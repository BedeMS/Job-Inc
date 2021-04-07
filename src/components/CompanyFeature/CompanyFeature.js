import React from "react";
import CompanyLogo from "../../elements/CompanyLogo/CompanyLogo";
import FollowButton from "../../elements/FollowButton/FollowButton";
import Button from "../../elements/Button/Button";
import {Link} from "react-router-dom";
import classes from "./CompanyFeature.module.css";

function CompanyFeature(props) {
  return (
    <div className={classes.CompanyFeature}>
      <div className={classes.CompanyFeature__img}>
        <CompanyLogo logo={props.logo} />
      </div>
      <div className={classes.CompanyFeature__info}>
        <Link to={`/companies/${props.id}`} className={classes.CompanyFeature__title}>{props.name}</Link>
        <p className={classes.CompanyFeature__location}>{props.location}</p>
      </div>
      <div className={classes.CompanyFeature__buttons}>
        <Button link to={`/companies/${props.id}`} name="Jobs" height="short" />
        <FollowButton
          follow={props.follow}
          id={props.id}
          handleFollow={props.handleFollow}
        />
      </div>
    </div>
  );
}

export default CompanyFeature;
