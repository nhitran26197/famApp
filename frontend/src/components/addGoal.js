import "../css/Profile.css";
import React from "react";
import axios from "axios";

function AddGoal(props) {
  const dialogRef = React.useRef(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");

  return (<>
    <button className="button text-blueGray-700" onClick={() => {
      dialogRef.current?.showModal();
    }}>
      {props.label}
      Add Goal
    </button>

    <dialog ref={dialogRef}>
      <form class="flex flex-col gap-4">
        <h2>Add Goal</h2>
        <label>
          Title:{" "}
          <input type="text" name="name" onChange={
            (e) => setTitle(e.target.value)
          }  />
        </label>
        <label>
          Description:{" "}
          <input type="text" name="name"  onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label>
          Location:{" "}
          <input type="text" name="name" onChange={(e) => setLocation(e.target.value)}/>
        </label>
        <button type="button" onClick={async (e) => {
          e.preventDefault();
          // await fetch("/api/goals", {
          alert('Submit your mom')
          dialogRef.current?.close();

          axios
            .post("http://localhost:3030/BucketList/create", {
              title,
              description,
              location,
            })
            .then((res) => {
              console.log(res);
              console.log(res.data);
            }
            )


        }}>Submit</button>
      </form>

    </dialog>
  </>);
}

export default AddGoal;