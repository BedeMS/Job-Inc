import React from "react";
import classes from "./CompanyInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";

function Info(props) {
  const socialMedia = {
    facebook: <FontAwesomeIcon icons={["fab", "facebook"]} />,
    twitter: <FontAwesomeIcon icons={["fab", "twitter"]} />,
    linkedin: <FontAwesomeIcon icons={["fab", "linkedin"]} />,
    instagram: <FontAwesomeIcon icons={["fab", "instagram"]} />,
  };

  // const companyInfo = props.info.map((el, ind) => <div>{el}</div>);

  const companyInfo = props.info.map((el, ind) => {
    if (Object.keys(el)[0] === "website") {
      return (
        <div className={classes.Info}>
          <p className={classes.info__label}>Website</p>
          {/* change to link */}
          <p className={classes.info__website}>{Object.values(el)[0]}</p>
        </div>
      );
    } else if (Object.keys(el)[0] === "socialMedia") {
      return (
        <div className={classes.Info}>
          <p className={classes.info__label}>Follow Us</p>
          <div className={classes.Info__social}>
            {Object.values(el).map((sm, i) => {
              return (
                /* change to link */
                <p className={classes.info__Social}>
                  {socialMedia[Object.keys(sm)[0]]}
                </p>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.Info}>
          <p className={classes.info__label}>{Object.keys(el)[0]}</p>
          <p>{Object.values(el)[0]}</p>
        </div>
      );
    }
  });

  return <div className={classes.CompanyInfo}>{companyInfo}</div>;
  // receiving an array of objects
}

export default Info;
