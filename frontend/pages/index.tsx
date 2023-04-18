import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const routeToLogin = () => {
    router.push("/login");
  };


  return (
    <div className={styles.container}>
      <div className={styles.form}>
      <button className={styles.button} onClick={routeToLogin}>Go to Login Page </button>
    </div>
    </div>
  );
};

export default Login;
