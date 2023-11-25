import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/loginpage.css'


function LogInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage('Login attempt submitted.'); // Placeholder message
    };

    return (
        <div className='body-div'>
            <div className="login-container">
                <h2>Login</h2>

                {message && <div>{message}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-form-group">
                        <input
                            autoFocus
                            className="login-form-input"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login-form-group">
                        <input
                            className="login-form-input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login-form-group">
                        <input
                            className="login-form-button"
                            type="submit"
                            value="Sign In"
                        />
                    </div>
                </form>

                <Link to="/Sign-Up" className="login-form-link">
                    Don't have an account? Sign up
                </Link>
            </div>
        </div>
    );
}

export default LogInPage;