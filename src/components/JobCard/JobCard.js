import React from "react";
import classes from "./JobCard.module.css";
import SaveButton from "../../elements/SaveButton/SaveButton";
import PostedDate from "./PostedDate/PostedDate";
import ModifyButton from "../../elements/ModifyButton/ModifyButton";

function JobCard(props) {
  const date = new Date().toLocaleDateString();
  return props.employer ? (
    <div className={classes.JobCard}>
      <div className={classes.JobCard__post}>
        <p className={classes.JobCard__post_title}>Job Title</p>
        <p className={classes.JobCard__post_company}>Company</p>
        <p className={classes.JobCard__post_pay}>$100,000 - $150,000</p>
        <p className={classes.JobCard__post_desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          totam eum. Asperiores, temporibus esse! Exercitationem laborum
          assumenda nisi sed porro fugit aut quis ducimus omnis perferendis. Et
          deserunt consequuntur repudiandae?
        </p>
        <div className={classes.JobCard__post_loc}>
          <p>Toronto, Ontario</p>
          <PostedDate date={date} />
        </div>
      </div>
        <div className={classes.JobCard__modify}>
          <ModifyButton type="edit" />
          <ModifyButton />
        </div>
    </div>
  ) : (
    <div className={classes.JobCard}>
      <SaveButton />
      <div className={classes.JobCard__post}>
        <p className={classes.JobCard__post_title}>Job Title</p>
        <p className={classes.JobCard__post_company}>Company</p>
        <p className={classes.JobCard__post_pay}>$100,000 - $150,000</p>
        <p className={classes.JobCard__post_desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          totam eum. Asperiores, temporibus esse! Exercitationem laborum
          assumenda nisi sed porro fugit aut quis ducimus omnis perferendis. Et
          deserunt consequuntur repudiandae?
        </p>
        <div className={classes.JobCard__post_loc}>
          <p>Toronto, Ontario</p>
          <PostedDate date={date} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
