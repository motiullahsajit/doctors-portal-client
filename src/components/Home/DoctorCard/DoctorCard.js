import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DoctorCard = ({ doctor }) => {
    const { name, image, email } = doctor;
    return (
        <div className="col-md-4 p-3">
            <div className="card h-100  border-0">
                <img src={`data:image/jpeg;base64,${image.img}`} className="card-img-top img-fluid mx-auto p-3 w-50" alt="..." />
                {/* <img src={`http://localhost:5050/${img}`} className="card-img-top img-fluid mx-auto p-3 w-50" alt="..." /> */}
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-secondary"> <FontAwesomeIcon icon={faPhone} /> {email}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;