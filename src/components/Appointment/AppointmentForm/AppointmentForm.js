import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [appointmentData, setAppointmentData] = useState(null)

    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        setAppointmentData(data)
    };

    // const onSubmit = data => {
    //     setAppointmentData(data)
    //     data.service = appointmentOn;
    //     data.date = date;
    //     data.created = new Date();
    //     console.log(data)
    //     fetch('http://localhost:5050/addAppointment', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(success => {
    //             if (success) {
    //                 closeModal();
    //                 alert('Appointment created successfully')
    //             }
    //         })
    // };

    const handlePaymentSuccess = (paymentId) => {
        appointmentData.paymentId = paymentId;
        fetch('http://localhost:5050/addAppointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment created successfully')
                }
            })
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className='text-brand text-center'>{appointmentOn}</h3>
                <p className="text-center text-secondary"><small>On {date.toDateString()}</small></p>
                <form style={{ display: appointmentData ? "none" : "block" }} className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.displayName}  {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.email} {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input  {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input  {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </div>
                </form>
                <div style={{ display: appointmentData ? "block" : "none" }}>
                    <h2>Please Pay Here</h2>
                    <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
                </div>
            </Modal>
        </div>
    );
};

export default AppointmentForm;