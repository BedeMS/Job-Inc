import React from "react";
import CompanyLogo from "../../elements/CompanyLogo/CompanyLogo";
import FollowButton from "../../elements/FollowButton/FollowButton";
import Button from "../../elements/Button/Button";
import classes from "./CompanyFeature.module.css";

function CompanyFeature(props) {
  return (
    <div className={classes.CompanyFeature}>
      <div className={classes.CompanyFeature__img}>
        <CompanyLogo />
      </div>
      <div className={classes.CompanyFeature__info}>
        <p className={classes.CompanyFeature__title}>Company</p>
        <p className={classes.CompanyFeature__location}>Toronto, Ontario</p>
      </div>
      <div className={classes.CompanyFeature__buttons}>
        <Button name="Jobs" colorScheme="light" height="short" />
        <FollowButton followed={props.followed} />
      </div>
    </div>
  );
}

export default CompanyFeature;
