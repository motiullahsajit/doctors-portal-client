import React, { useEffect, useState } from 'react';
import PatientsDataTable from '../PatientsDataTable/PatientsDataTable'
const AllPatients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('https://server-doctors-portal.herokuapp.com/patients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    return (
        <div className="col-md-10">
            <h5 className="text-brand">All Patients</h5>
            <PatientsDataTable patients={patients} />
        </div>
    );
};

export default AllPatients;