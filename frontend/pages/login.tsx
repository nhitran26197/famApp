import React, { useState } from 'react';
import styles from '../styles/login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    //if no username and password, return error
    //if username and password, return success
    if (username === '' && password === '') {
      alert('Please enter a username and password');
    }
    if (username !== '' && password !== '') {
      //check if username and password are correct
      //if correct, redirect to dashboard
      //if incorrect, return error
      
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.h1}>Login to fam.ily</h1>
        <form onSubmit={handleLogin}>
          <label>
            <span className={styles.username}>Username:</span>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            <span className={styles.password}>Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.remember}>Remember me</span>
          </label>
          <label>
            <a className={styles.forgot} href="/forgot">Forgot password?</a>
          </label>
          <button type="submit">Login</button>
          <a className={styles.registerLink}href="/register">Dont have an account? Register here!</a>
          </form>
      </div>
    </div>
  );
};

export default Login;