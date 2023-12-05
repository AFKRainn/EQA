import { useState } from 'react';
import './experience.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Experience() {

    const [user, setUser] = useState(false)
    let percent = 30

    return (
        <div className='exp-main'>
            {user ? (
                <Link to="/Log-In" className="nav-link">Log-In to track your porgress!</Link>
            ) : (
                <>
                    <h1>Level 5</h1>
                </>
            )}

            <div className="experience-bar">
                <img src={process.env.PUBLIC_URL + "/avatar.png"} alt="Avatar" className="avatar" />
                <div className="info">
                    <div className="username">Username</div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${percent}%` }}></div>
                    </div>
                    <div className="experience">63</div>
                </div>
                <div className="level">224</div>
            </div>
        </div>
    )
}


export default Experience;
