import React from "react";
import classes from "./CompanyDetails.module.css";
import banner from "../../../assets/img/companyBanner.jpeg";
import CompanyLogo from "../../../elements/CompanyLogo/CompanyLogo";
import FollowButton from "../../../elements/FollowButton/FollowButton";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import CompanyDescription from "../CompanyDescription/CompanyDescription";

function CompanyDetails(props) {
  return (
    <div className={classes.CompanyDetails}>
      <img className={classes.CompanyDetails__banner} src={banner} />
      <div className={classes.CompanyDetails__header}>
        <CompanyLogo className={classes.CompanyDetails__header__logo} />
        <h1 className={classes.CompanyDetails__header__title}>
          TD Canada Trust
        </h1>
        <FollowButton />
      </div>
      {/* loop through the companies info given and display it. */}
      {/* call the component with the array passed down */}
      <CompanyInfo
        info={[
          { Website: "www.td.com" },
          { Headquarters: "Toronto, Ontario" },
          {
            socialMedia: [
              { facebook: "www.facebook.com" },
              { instagram: "www.instagram.com" },
            ],
          },
        ]}
      />
      <CompanyDescription />
    </div>
  );
}

export default CompanyDetails;
