import "../css/Profile.css";
import React from "react";

function AddGoal(props) {
  return (
    <button className="button text-blueGray-700" onClick={props.onClick}>
      {props.label}
      Add Goal
    </button>
  );
}

export default AddGoal;