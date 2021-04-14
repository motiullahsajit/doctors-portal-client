import React, { useEffect, useState } from 'react';
import DoctorList from '../DoctorLIst/DoctorList';

const Settings = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return (
        <div>
            <h2 className='text-brand'>Doctors List</h2>
            {
                doctors.map(doctor => <DoctorList doctor={doctor} />)
            }
        </div>
    );
};

export default Settings;