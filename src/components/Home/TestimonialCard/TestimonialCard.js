import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, from, meassage, image } = testimonial;
    return (
        <div className='col-md-3 border border-secondary my-2'>
            <div className='p-3'>
                <p>{meassage}</p>
            </div>
            <div className="d-flex justify-content-around p-2">
                <div className="col-md-4">
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div className="col-md-8">
                    <h6>{name}</h6>
                    <small>{from}</small>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;