import React from 'react';

const AppointmentList = ({ appointments }) => {

    const handleAddToPatients = (appointment) => {
        fetch('https://server-doctors-portal.herokuapp.com/addPatient', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    handleAddDelete(appointment._id)
                    alert('Patient created successfully')
                }
            })
    }

    const handleAddDelete = id => {
        fetch(`https://server-doctors-portal.herokuapp.com/deleteAppoinment/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your product deleted successfully')
                }
            })
    };

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{appointment.name}</td>
                            <td>{appointment.gender}</td>
                            <td>{appointment.age}</td>
                            <td>{appointment.weight}KG</td>
                            <td>{appointment.service}</td>
                            <td>{appointment.email}</td>
                            <td><button onClick={() => handleAddToPatients(appointment)} className="btn btn-success mx-1">Approve</button>
                                <button onClick={() => handleAddDelete(appointment._id)} className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentList;