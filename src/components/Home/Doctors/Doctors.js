import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://server-doctors-portal.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (
        <section className='container my-5'>
            <h4 style={{ color: '#1CC7C1' }} className='text-center my-5'>Our Doctors</h4>
            <div className="row d-flex justify-content-around">
                {
                    doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} />)
                }
            </div>
        </section>
    );
};

export default Doctors;