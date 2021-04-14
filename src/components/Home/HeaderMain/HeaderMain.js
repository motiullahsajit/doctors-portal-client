import React from 'react';
import { Link } from 'react-router-dom';
import ChairImg from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center justify-content-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Your New Smile  <br /> Starts Here </h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia omnis excepturi. Optio, nisi sequi?</p>
                <button style={{ backgroundColor: '#19D3AE', border: 'none', outline: 'none' }} className="btn"><Link to='/appointment' className='text-decoration-none text-white'>GET APPOINTMENT</Link></button>
            </div>
            <div className="col-md-6">
                <img src={ChairImg} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;