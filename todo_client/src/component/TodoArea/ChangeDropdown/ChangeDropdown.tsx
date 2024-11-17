import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function ChangeDropdown() {
  const options = ["change", w"done", "running", "delay"];
  const defaultOption = options[0];
  return (
    <Dropdown
      options={options}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
}

export default ChangeDropdown;
