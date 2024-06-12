import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import logo from './rr-logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid.";
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
            // Simulate a successful login (replace with actual login logic)
            console.log('Form submitted');
            alert('Login successful!');
            // Navigate to the home page or dashboard after login
            navigate("/");
        }
    };

    const handleClick = () => {
        navigate("/");
    };

    const handleOnClick = () => {
        navigate("/signup");
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo} 
                    alt="Logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={handleOnClick}>Sign Up</button>
            </div>
        </div>
    );
}

export default Login;
