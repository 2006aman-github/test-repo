import { Icon } from "@iconify/react";
import React from "react";
import "../scss/input.scss";

function Input({ placeholder }) {
  return (
    <div className="input">
      <input className="input-el" type="text" placeholder={placeholder} />
      <Icon icon="fe:drop-down" color="grey" />
    </div>
  );
}

export default Input;
