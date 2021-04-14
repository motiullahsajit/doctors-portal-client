import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride,
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
        name: 'Cavity Filling',
        image: cavity,
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    },
    {
        name: 'Teeth Whitening',
        image: whitening,
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
    }
]

const Services = () => {
    return (
        <section className='container my-5'>
            <div className="text-center">
                <h4 style={{ color: '#1CC7C1' }}>OUR SERVICES</h4>
                <h2 style={{ color: '#3A4256' }}>Services We Porvide</h2>
            </div>
            <div className="row g-4 my-5">
                {
                    serviceData.map(service => <ServiceDetail key={service.name} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;