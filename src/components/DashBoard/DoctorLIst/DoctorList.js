import React from 'react';

const DoctorList = ({ doctor }) => {

    const handleAddDelete = id => {
        fetch(`http://localhost:5050/removeDoctor/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Doctor removed successfully')
                }
            })
    };

    return (
        <div className='row w-75 d-flex align-items-center'>
            <div className="col-md-2"><img src={`data:image/jpeg;base64,${doctor.image.img}`} className="card-img-top img-fluid mx-auto p-3" alt="..." /></div>
            <div className="col-md-6">
                <h3>Name: {doctor.name}</h3>
                <h6>Email: {doctor.email}</h6>
            </div>
            <div className="col-md-2">
                <button className="btn btn-danger" onClick={() => handleAddDelete(doctor._id)}>Remove</button>
            </div>
        </div>
    );
};

export default DoctorList;