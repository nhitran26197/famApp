import React, { useState } from "react";
import styles from "../css/forgot.module.css";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const routeToLogin = () => {
    navigate("/");
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
          <button className={styles.button} type="submit">
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
