import React, { useContext } from "react";
import classes from "./JobCard.module.css";
import SaveButton from "../../elements/SaveButton/SaveButton";
import PostedDate from "./PostedDate/PostedDate";
import ModifyButton from "../../elements/ModifyButton/ModifyButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { DataContext } from "../../context/companies.context";

dayjs.extend(relativeTime);

function JobCard(props) {
  
  const handleClick = (e) => {
    if (props.showPost) {
      if (e.target.closest("#card")) {
        props.showPost(props.id);
      }
    }
  };
  return (
    <div className={classes.JobCard}>
      {props.employer ? (
        ""
      ) : (
        <SaveButton
          saved={props.saved}
          id={props.id}
          companyId={props.companyId}
        />
      )}
      <div className={classes.JobCard__post} id={"card"} onClick={handleClick}>
        <p className={classes.JobCard__post_title}>{props.title}</p>
        <p className={classes.JobCard__post_company}>{props.company}</p>
        <p className={classes.JobCard__post_pay}>
          {props.pay ? props.pay : ""}
        </p>
        <p className={classes.JobCard__post_desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          totam eum. Asperiores, temporibus esse! Exercitationem laborum
          assumenda nisi sed porro fugit aut quis ducimus omnis perferendis. Et
          deserunt consequuntur repudiandae?
        </p>
        <div className={classes.JobCard__post_loc}>
          <p>{props.location}</p>
          <PostedDate date={dayjs().to(props.date)} />
        </div>
      </div>
      {props.employer ? (
        <div className={classes.JobCard__modify}>
          <ModifyButton type="edit" id={props.id} companyId={props.companyId} />
          <ModifyButton id={props.id} companyId={props.companyId} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default JobCard;
