import React, { useState } from "react";
import styles from "../css/forgot.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const routeToLogin = () => {
    navigate("/");
  };

  const handleReset = async (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post("http://localhost:3030/pwReset", {
        email,
      }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Check your email for a link to reset your password!!!!!!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.h1}>Forgot Password</h1>
        <form onSubmit={routeToLogin}>
          <label>
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button onClick={handleReset} className={styles.button} type="submit">
            Reset Password
          </button>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </form>
      </div>
      <div>
        <img className={styles.heroimage} src="https://svgshare.com/i/sEE.svg" alt="asdf"/>
      </div>
    </div>
  );
};

export default Forgot;
