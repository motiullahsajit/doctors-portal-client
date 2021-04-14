import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AppointmentCard from '../AppointmentDash/AppointmentCard/AppointmentCard';



const AppointDashCards = ({ appointments, selectedDate }) => {

    const [loggedInUser] = useContext(UserContext)
    const [appointmentsbyDate, setAppointmentsByDate] = useState([]);
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('https://server-doctors-portal.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointmentsByDate(data))
    }, [selectedDate])


    useEffect(() => {
        fetch('https://server-doctors-portal.herokuapp.com/patients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    const appointmentCart = [
        {
            number: appointments.length,
            subject: 'Pending Appointments'

        },
        {
            number: appointmentsbyDate.length,
            subject: 'Todays Appointments'

        },
        {
            number: appointments.length,
            subject: 'Total Appointments'

        },
        {
            number: patients.length,
            subject: 'Total Patients'
        }
    ]

    return (
        <div className='row d-flex justify-content-around'>
            {
                appointmentCart.map(appointment => <AppointmentCard key={appointment.subject} appointment={appointment} />)
            }
        </div>
    );
};

export default AppointDashCards;