import "../css/Profile.css";
import React from "react";

function AddGoal(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
      Add goal
    </button>
  );
}

export default AddGoal;
