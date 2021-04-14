import React from 'react';

const AppointmentShortList = ({ appointments }) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) => <>
                        <tr key={index}>
                            <td>{appointment.name}</td>
                            <td>{appointment.phone}</td>
                            <td>{appointment.email}</td>
                            <td>{appointment.service}</td>
                            <td>{(new Date(appointment.date).toDateString('dd/mm/yyyy'))}</td>
                        </tr>
                    </>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;