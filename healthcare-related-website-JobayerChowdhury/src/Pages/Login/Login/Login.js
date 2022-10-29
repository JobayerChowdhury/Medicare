import React from 'react';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';



const Login = () => {
    const  {signInUsingGoogle , loginEmail, handleEmailChange, handlePassWordChange} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    

const googleLogin = () =>{
      signInUsingGoogle()
      .then(result => {
       history.push(redirect_uri)
      })
}

    return (
      <div className="login-form container mx-auto my-5 py-5">
      <div>
          <h2>Login</h2>
          <form onSubmit={loginEmail}>
              <input className="mb-3" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required/>
              <br />
              <input className="mb-3" onBlur={handlePassWordChange} type="password" name="" id="" placeholder="password" required/>
              <br />
              <input className="input-color" type="submit" value="Submit" />
          </form>
          <p className="fs-6 fw-bolder">new to Medicare Health website? <Link to="/register">Create Account</Link></p>

  
            <button className="btn-danger" onClick={googleLogin}>Google Sign In</button>
      </div>
  </div>
    );
};

export default Login;