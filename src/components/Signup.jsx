import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import logo from './rr-logo.png'

function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!name) errors.name = "Name is required.";
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid.";
        }
        if (!mobile) {
            errors.mobile = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(mobile)) {
            errors.mobile = "Mobile number is invalid.";
        }
        if (!password) {
            errors.password = "Password is required.";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Proceed with form submission or further processing
            console.log('Form submitted');

            // Simulate successful registration (you should replace this with your registration logic)
            alert('Registration successful!');
            
            // Navigate to the login page
            navigate("/login");
        }
    };

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src={logo} alt="Logo" />
            </Link>

            <div className='login__container'>
                <h1>Sign-Up</h1>

                <form onSubmit={handleSubmit}>
                    <h5>Your Name</h5>
                    <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}

                    <h5>E-mail</h5>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}

                    <h5>Mobile Number</h5>
                    <input
                        type='text'
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
                    />
                    {errors.mobile && <div className="error">{errors.mobile}</div>}

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}

                    <button type='submit' className='login__signInButton'>Sign Up</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.<br />
                    <a href='#' onClick={handleClick}>Already have an account.</a>
                </p>

                <button className='login__registerButton' onClick={handleClick}>Sign In</button>
            </div>
        </div>
    )
}

export default SignUp;
