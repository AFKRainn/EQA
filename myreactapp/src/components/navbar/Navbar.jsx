import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = "user"

    // useEffect(() => {
    //     // Function to check user's authentication status
    //     const checkAuthStatus = async () => {
    //         try {
    //             const response = await fetch('/api/auth/status'); // Replace with your API endpoint
    //             const data = await response.json();
    //             if (data.isAuthenticated) {
    //                 setIsAuthenticated(true);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching auth status', error);
    //         }
    //     };

    //     checkAuthStatus();
    // }, []);

    return (
        <nav className="navbar navbar-expand navbar-light bg-light" style={{ padding: '1%' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Educational Quiz</Link>
                <div className="d-flex justify-content-end" style={{ width: '100%' }}>
                    <ul className="navbar-nav">
                        {isAuthenticated ? (
                            <li className="nav-item"><Link to={`/${user}`} className="nav-link">{user}</Link></li>
                        ) : (
                            <>
                                <li className="nav-item"><Link to="/Log-In" className="nav-link">Log-In</Link></li>
                                <li className="nav-item"><Link to="/Sign-up" className="nav-link">Sign-Up</Link></li>
                            </>
                        )}
                        {/* Rest of your Navbar code */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;