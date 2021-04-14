import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [setLoggedInUser] = useContext(UserContext);
    let { url } = useRouteMatch();
    return (
        <div className="sidebar d-flex flex-column justify-content-between col py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/appointments`} className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/patients`} className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/addDoctor`} className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/settings`} className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" onClick={() => setLoggedInUser({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;