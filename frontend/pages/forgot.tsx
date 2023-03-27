import React, { useState } from "react";
import styles from "../styles/forgot.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Forgot = () => {
    const router = useRouter();
      const [email, setEmail] = useState("");
  
  const routeToLogin = () => {
      router.push("/");
  }
  
      return(
          <div className={styles.container}>
              <div className={styles.form}>
              <h1 className={styles.h1}>Forgot Password</h1>
              <form onSubmit={routeToLogin}>
                  <label>
                      <span>Email</span>
                      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </label>
                  <button className={styles.button} type="submit">Reset Password</button>
                  <a className={styles.loginLink} href="/">Back to sign in</a>
              </form>
  
              </div>
          </div>
      )
  }
  

  export default Forgot;