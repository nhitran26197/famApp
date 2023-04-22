import React, { useState, useEffect } from 'react';
import styles from '../css/login.module.css';
import { Link, useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = () => {

  //route to dashboard
  const routeToDashBoard = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }

  
  const [user, setUser] = useState(null);

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    localStorage.setItem('user', user.name);
    localStorage.setItem('email', user.email);
  }

 

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "529244598477-he9l0o8rm3ou3e98u2c5peme74iod4c3.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme : 'outline', size : 'large', text: 'continue_with', width: '300px', height: '50px' }
    );
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleLogin = () => {
  
   
    if (username !== '' && password !== '') {

      // fetch('http://localhost:8000/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username,
      //     password,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.error) {
      //       alert(data.error);
      //     } else {
      //       navigate('/dashboard');
      //     }
      //   });
      navigate('/dashboard');
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
            <Link className={styles.forgot} to="/forgot-password">Forgot Password?</Link>
          </label>
          <button type="submit">Login</button>
          <div id="signInDiv"></div>
          { user && 
          <div>
          <img alt="user pfp" src={user.picture}></img>
          <p className={styles.h1}>Logged in as {user.name}</p>
          <button type="submit" onClick={(e) => routeToDashBoard(e)}>Continue To Dashboard</button>
          </div>}
          <Link className={styles.link} to="/register">Sign Up</Link>
          </form>
      </div>
      <div>
        <img className={styles.heroimage} src="https://svgshare.com/i/sEE.svg" alt="asdf"/>
      </div>
    </div>
  );
};

export default Login;