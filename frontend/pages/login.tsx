import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router'
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = () => {
  
    if (username === '' && password === '') {
      alert('Please enter a username and password');
    }
    if (username !== '' && password !== '') {

      fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            router.push('/navbar');
          }
        });
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
            <Link href="/forgot"><a className={styles.forgot}>Forgot Password?</a></Link>
          </label>
          <button type="submit">Login</button>
          <Link href="/register"><a className={styles.link}>Sign Up</a></Link>
          </form>
      </div>
      <div>
        <img className={styles.heroimage} src="https://svgshare.com/i/sEE.svg" alt="asdf"/>
      </div>
    </div>
  );
};

export default Login;
