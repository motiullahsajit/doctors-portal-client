import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import AppointmentShortList from '../DashBoard/AppointmentShortList/AppointmentShortList';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppoinment from './BookAppointment/BookAppoinment';

const Appointment = () => {
    const [loggedInUser] = useContext(UserContext)
    const [preAppointments, setPreAppointments] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        fetch(`http://localhost:5050/userAppointments?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => setPreAppointments(data))
    }, [])

    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            {
                preAppointments.length === 0 ? <h2 className='text-center text-brand my-5'>You did't have any appointments</h2> : <>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-8">
                            <h4 className='text-brand text-center'>Your Previous Appointments</h4>
                            <AppointmentShortList appointments={preAppointments} />
                        </div>
                    </div>
                </>
            }
            {
                loggedInUser.email ? <BookAppoinment date={selectedDate} /> : <h2 className='text-center text-brand my-5'>Please Login Again</h2>
            }
            <Footer />
        </div>
    );
};

export default Appointment;