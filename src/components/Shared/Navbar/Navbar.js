import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5050/isDoctor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link mr-5 text-brand" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-5 text-brand" to='/appointment'>Appointment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-5 text-brand" to='/contactUs'>Contact Us</Link>
                            </li>
                            {
                                isDoctor && <li className="nav-item">
                                    <Link className="nav-link mr-5 text-brand" to='/dashboard'>Dashboard</Link>
                                </li>
                            }
                            <li>
                                {
                                    loggedInUser.email && loggedInUser.displayName ? <Link to='/login' className='nav-link mr-5 text-brand' >
                                        {loggedInUser.photoURL ? <img src={loggedInUser.photoURL} style={{ width: "50%", borderRadius: "50%" }} alt="..." /> : <>{loggedInUser.displayName}</>}
                                    </Link> : <Link className="nav-link mr-5 text-brand" to='/login'>Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;