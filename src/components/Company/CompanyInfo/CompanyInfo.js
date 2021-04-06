import React from "react";
import classes from "./CompanyInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function Info(props) {
  const socialMedia = {
    facebook: (
      <FontAwesomeIcon
        icon={["fab", "facebook"]}
        className={classes.Info__social__icon}
      />
    ),
    twitter: (
      <FontAwesomeIcon
        icon={["fab", "twitter"]}
        className={classes.Info__social__icon}
      />
    ),
    linkedin: (
      <FontAwesomeIcon
        icon={["fab", "linkedin"]}
        className={classes.Info__social__icon}
      />
    ),
    instagram: (
      <FontAwesomeIcon
        icon={["fab", "instagram"]}
        className={classes.Info__social__icon}
      />
    ),
  };

  const companyInfo = props.info.map((el, ind) => {
    if (Object.keys(el)[0] === "website") {
      return (
        <div className={classes.Info}>
          <p className={classes.Info__label}>website</p>
          {/* change to link */}
          <p className={classes.Info__website}>{Object.values(el)[0]}</p>
        </div>
      );
    } else if (Object.keys(el)[0] === "socialMedia") {
      //Generate each  icon based on data provided by employer
      return (
        <div className={classes.Info}>
          <p className={classes.Info__label}>follow us</p>
          {Object.values(el)[0].map((sm, i) => {
            return <div>{socialMedia[Object.keys(sm)[0]]}</div>;
          })}
        </div>
      );
    } else {
      return (
        <div className={classes.Info}>
          <p className={classes.Info__label}>{Object.keys(el)[0]}</p>
          <p className={classes.Info__answer}>{Object.values(el)[0]}</p>
        </div>
      );
    }
  });

  return <div className={classes.CompanyInfo}>{companyInfo}</div>;
  // receiving an array of objects
}

export default Info;
