import React, { useState } from "react";
import styles from "../styles/register.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

const routeToLogin = () => {
    router.push("/");
}


    return(
        <div className={styles.container}>
            <div className={styles.form}>
            <h1 className={styles.h1}>Register</h1>
            <form onSubmit={routeToLogin}>
                <label>
                    <span className={styles.username}>Username:</span>
                    <input placeholder="Your Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <span className={styles.password}>Password:</span>
                    <input placeholder="Your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Email:</span>
                    <input placeholder="Your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>First Name:</span>
                    <input placeholder="Your First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    <span>Last Name:</span>
                    <input placeholder="Your Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    <span>Age:</span>
                    <input placeholder="Your Age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <button className={styles.button} type="submit">Register</button>
                <a className={styles.loginLink} href="/">Already have an account? Login here!</a>
            </form>

            </div>
        </div>
    )
}

export default Register;