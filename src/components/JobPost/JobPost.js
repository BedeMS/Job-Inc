import React from "react";
import classes from "./JobPost.module.css";
import Button from "../../elements/Button/Button";
import SaveButton from "../../elements/SaveButton/SaveButton";
import JobDesc from "./JobDesc/JobDesc";

function JobPost(props) {
  return (
    <div className={classes.JobPost}>
      <div className={classes.JobPost__header}>
        <p className={classes.JobPost__header_title}>{props.title}</p>
        <div className={classes.JobPost__header_div}>
          <p className={classes.JobPost__header_company}>{props.company}</p>
          <p className={classes.JobPost__header_loc}>{props.location}</p>
          <div className={classes.JobPost__header_buttons}>
            <Button name="Apply" />
            <SaveButton
              saved={props.saved}
              handleSave={props.handleSave}
              id={props.id}
            />
          </div>
        </div>
      </div>
      <JobDesc sections={props.sections} />

    </div>
  );
}

export default JobPost;
