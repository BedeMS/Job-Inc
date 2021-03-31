import React from "react";
import classes from "./JobPost.module.css";
import Button from "../../elements/Button/Button";
import SaveButton from "../../elements/SaveButton/SaveButton";
import JobDesc from "./JobDesc/JobDesc";

function JobPost(props) {
  return (
    <div className={classes.JobPost}>
      <div className={classes.JobPost__header}>
        <p className={classes.JobPost__header_title}>Job Title</p>
        <div className={classes.JobPost__header_div}>
          <p className={classes.JobPost__header_company}>Company</p>
          <p className={classes.JobPost__header_loc}>Location</p>
          <div className={classes.JobPost__header_buttons}>
            <Button name="Apply" />
            <SaveButton />
          </div>
        </div>
      </div>
      <JobDesc  className={classes.JobDesc}/>
      {/* <div className={classes.JobPost__desc}>

    </div> */}
    </div>
  );
}

export default JobPost;
