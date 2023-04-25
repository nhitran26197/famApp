import React, { useState } from "react";
import styles from "../css/register.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  let navigte = useNavigate();

  const routeToLogin = () => {
    navigte("/login");
  };

  const handleRegister = async (e) => {
    const name = firstName + " " + lastName;
    e.preventDefault();
    axios
      .post("http://localhost:3030/signup", {
        username: username,
        password: password,
        email: email,
        name: name,
        age: age,
      })
      .then((res) => {
        if (res.status === 200) {
          navigte("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.h1}>Register</h1>
        <form onSubmit={routeToLogin}>
          <label>
            <span className={styles.username}>Username:</span>
            <input
              placeholder="Your Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <span className={styles.password}>Password:</span>
            <input
              placeholder="Your Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              placeholder="Your Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>First Name:</span>
            <input
              placeholder="Your First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <span>Last Name:</span>
            <input
              placeholder="Your Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            <span>Age:</span>
            <input
              placeholder="Your Age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <button onClick={handleRegister} className={styles.button} type="submit">
            Register
          </button>
          <Link className={styles.link} to="/login">
            Already have an account? Login here!
          </Link>
        </form>
      </div>
      <div>
        <img
          className={styles.heroimage}
          src="https://svgshare.com/i/sEE.svg"
          alt="asdf"
        />
      </div>
    </div>
  );
};

export default Register;
