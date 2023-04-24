import "../css/Profile.css";
import React from "react";

function AddTime(props) {
  return (
    <button className="button text-blueGray-700" onClick={props.onClick}>
      {props.label}
      Add Event
    </button>
  );
}

export default AddTime;