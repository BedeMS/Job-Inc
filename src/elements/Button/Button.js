import React from "react";
import "./Button.css";

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
        <p className={"Button__name"}>{props.name}</p>
      </div>
    ) : (
      <div
        className={
          props.colorScheme === "light" ? "Button ButtonLight" : "Button"
        }
      >
        <p className={"Button__name"}>{props.name}</p>
      </div>
    );
  return button;
};

export default Button;
