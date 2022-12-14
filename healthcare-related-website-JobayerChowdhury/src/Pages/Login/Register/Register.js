import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Register.css'





const Register = () => {
    const { signInUsingGoogle, handleEmailChange, handlePassWordChange, handleRegistration, error } = useAuth();

    return (
        <div className="login-form container mx-auto my-5 py-5">

            <div className="">
                <div>
                    <h2>Register: Create Account</h2>
                    <form onSubmit=
                        {handleRegistration}>
                        <input className="mb-3" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required />
                        <br />
                        <input className="mb-3" onBlur={handlePassWordChange} type="password" name="" id="" placeholder="Your Password" required />
                        <br />
                        <input className="mb-3" type="password" name="" id="" placeholder="Re-enter Password" required />
                        <br />
                        <div> <p className="mt-2 text-danger fw-bold"> {error} </p> </div>

                        <input className="input-color" type="submit" value="register" />

                    </form>
                    <p className="fs-6 fw-bolder">Already have an account? <Link to="/login">Login</Link></p>
                    <button onClick={signInUsingGoogle} className="btn-danger">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;