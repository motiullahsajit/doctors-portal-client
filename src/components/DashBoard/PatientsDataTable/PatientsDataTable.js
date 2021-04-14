import React from 'react';

const PatientsDataTable = ({patients}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  patients.map((patient, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                        <td>{patient.service}</td>
                        <td>{patient.weight}KG</td>
                        <td>{patient.phone}</td>
                        <td>{patient.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default PatientsDataTable;