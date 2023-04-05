import React, { useState } from "react";
import styles from "../styles/login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    //if no username and password, return error
    //if username and password, return success
    if (username === "" && password === "") {
      alert("Please enter a username and password");
    }
    if (username !== "" && password !== "") {
      //check if username and password are correct
      //if correct, redirect to dashboard
      //if incorrect, return error
    }
  };

  return (
    <div className={styles.container}>
      <h1>Hello world!</h1>
    </div>
  );
};

export default Login;
