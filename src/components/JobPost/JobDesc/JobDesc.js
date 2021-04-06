import React from "react";
import classes from "./JobDesc.module.css";

function JobDesc(props) {
  console.log(props.sections)
  return (
    <div className={classes.JobDesc}>
      {props.sections.map((el) => (
        <div className={classes.JobDesc__section}>
          <h1>{el.title}</h1>
          <p>{el.description}</p>
        </div>
      ))}
      {/* <div className={classes.JobDesc__section}>
        <h1>Your Role</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          doloremque inventore quisquam totam enim nulla aliquam autem dolorum
          esse nihil fugit facere ullam vel quia, ea explicabo sit obcaecati?
          Nulla?
        </p>
      </div>
      <div className={classes.JobDesc__section}>
        <h1>Qualification</h1>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>     
        </ul>
      </div>
      <div className={classes.JobDesc__section}>
        <h1>What We Offer</h1>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>     
        </ul>
      </div>
      <div className={classes.JobDesc__section}>
        <h1>Company Brief</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          doloremque inventore quisquam totam enim nulla aliquam autem dolorum
          esse nihil fugit facere ullam vel quia, ea explicabo sit obcaecati?
          Nulla?
        </p>
      </div>
      <div className={classes.JobDesc__section}>
        <h1>Your Role</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          doloremque inventore quisquam totam enim nulla aliquam autem dolorum
          esse nihil fugit facere ullam vel quia, ea explicabo sit obcaecati?
          Nulla?
        </p>
      </div>
      <div className={classes.JobDesc__section}>
        <h1>Qualification</h1>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>     
        </ul>
      </div>
      <div className={classes.JobDesc__section}>
        <h1>What We Offer</h1>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>     
        </ul>
      </div> */}
    </div>
  );
}

export default JobDesc;
