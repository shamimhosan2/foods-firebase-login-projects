import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/Md';
const Login = () => {
    return (
        <div className='mains'>
           <div className='Login-account'>
              <h2>Please Login Your Account</h2>
              <div>
                <div className='login-part'>
                    <h4>Email Address</h4>
                    <input type="text" placeholder='Enter email' />
                    <h4>password</h4>
                    <input type="text" placeholder='password' />
                    <p><MdOutlineCheckBoxOutlineBlank></MdOutlineCheckBoxOutlineBlank> Check me out</p>
                    <button type="button" className="btn btn-primary" disabled>Login</button>
                    <p>Don't Have an Account? <Link to='/'> Register</Link></p>
                </div>
              </div>
           </div>
        </div>
    );
};

export default Login;