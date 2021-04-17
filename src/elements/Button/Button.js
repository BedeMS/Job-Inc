import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  const icon =
    props.name === "profile" ? (
      <FontAwesomeIcon icon={faUser} className={"Button__icon"} />
    ) : props.link ? (
      <Link to={props.to} className={"Button__link"}>
        {props.name}
      </Link>
    ) : (
      <p className={"Button__name"}>{props.name}</p>
    );

  const button =
    props.height === "short" ? (
      <div
        onClick={props.handleClick}
        className={
          props.colorScheme === "light"
            ? "Button ButtonLight ButtonShort"
            : "Button ButtonShort"
        }
      >
        {icon}
      </div>
    ) : (
      <div
        onClick={props.handleClick}
        className={
          props.colorScheme === "light" ? "Button ButtonLight" : "Button"
        }
      >
        {icon}
      </div>
    );
  return button;
};

export default Button;
