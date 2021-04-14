import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        tittle: 'Opening Hours',
        description: 'We are open',
        icon: faClock,
        background: 'primary'
    },
    {
        tittle: 'Visit Our Location',
        description: 'Brooklyn, USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        tittle: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='container'>
            <div className="row">
                {
                    infosData.map(info => <InfoCard info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;