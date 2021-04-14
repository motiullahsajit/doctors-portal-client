import React, { useEffect, useState } from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import AppointDashCards from '../AppointDashCards/AppointDashCards';

const AppointmentDash = ({selectedDate}) => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://server-doctors-portal.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <>
            <AppointDashCards selectedDate={selectedDate} appointments={appointments} />
            <div className="col-md-10">
                <h5 className="text-brand">All Appointments</h5>
                <AppointmentList appointments={appointments} />
            </div>
        </>
    );
};

export default AppointmentDash;