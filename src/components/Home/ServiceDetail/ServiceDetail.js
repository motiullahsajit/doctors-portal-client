import React from 'react';

const ServiceDetail = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div className="col-md-4 col-sm-9 mx-auto my-2">
            <div className="card h-100 p-3 border-0">
            <img src={image} className="card-img-top w-25 mx-auto" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-secondary">{description}</p>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetail;