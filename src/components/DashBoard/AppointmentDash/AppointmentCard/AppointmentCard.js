import React from 'react';
import './AppointmentCard.css'
const AppointmentCard = ({ appointment }) => {
    return (
        <div className='d-flex justify-content-between col-md-2 py-2 text-light my-2 align-items-center rounded card-row'>
            <div className="col-md-2 p-2"><h1 className='fs-1'>{appointment.number}</h1></div>
            <div className="col-md-9 p-2"><h4>{appointment.subject}</h4></div>
        </div>
    );
};

export default AppointmentCard;