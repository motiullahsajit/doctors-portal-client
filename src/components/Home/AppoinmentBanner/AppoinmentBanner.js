import React from 'react';
import './AppoinmentBanner.css';
import doctorBanner from '../../../images/doctorBanner.png'

const AppoinmentBanner = () => {
    return (
        <section className="make-appointment">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-4 d-none d-md-block">
                    <img src={doctorBanner} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5 className="text-brand text-uppercase ">Appointment</h5>
                    <h1 className="my-4">Make an Appointment <br/> Today</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    <button className="btn btn-brand">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};
export default AppoinmentBanner;