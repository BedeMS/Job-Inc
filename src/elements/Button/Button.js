import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  const button =
    props.height === "short" ? (
      <div
        className={
          props.colorScheme === "light"
            ? "Button ButtonLight ButtonShort"
            : "Button"
        }
      >
        {props.name === "profile" ? (
          <FontAwesomeIcon icon={faUser} className={"Button__icon"} />
        ) : (
          <p className={"Button__name"}>{props.name}</p>
        )}
      </div>
    ) : (
      <div
        className={
          props.colorScheme === "light" ? "Button ButtonLight" : "Button"
        }
      >
        {props.name === "profile" ? (
          <FontAwesomeIcon icon={faUser} className={"Button__icon"} />
        ) : (
          <p className={"Button__name"}>{props.name}</p>
        )}
      </div>
    );
  return button;
};

export default Button;
