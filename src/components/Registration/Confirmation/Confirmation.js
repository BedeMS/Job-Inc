import React from "react";
import classes from "./Confirmation.module.css";
import Button from "../../../elements/Button/Button";

function Confirmation(props) {
  return (
    <div className={classes.Confirmation}>
      <div className={classes.Confirmation__header}>
        <h1 className={classes.Confirmation__title}>Confirmation</h1>
        <Button
          colorScheme="light"
          name="Sign In"
          to="/auth"
          handleClick={props.confirm}
        />
      </div>
      <p className={classes.Confirmation__message}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
    </div>
  );
}

export default Confirmation;
