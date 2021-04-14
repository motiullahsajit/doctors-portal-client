import React, { useContext, useEffect, useState } from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
import { UserContext } from '../../../App';

const AppointmentsByDate = ({ selectedDate }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/appointmentsByDate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <div className='col'>
            <h2 className="text-brand">Appointments</h2>
            {
                appointments.length ?
                    <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByDate;