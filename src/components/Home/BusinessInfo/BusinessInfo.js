import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        id: 1,
        tittle: 'Opening Hours',
        description: 'We are open',
        icon: faClock,
        background: 'primary'
    },
    {
        id: 2,
        tittle: 'Visit Our Location',
        description: 'Brooklyn, USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        id: 3,
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
                    infosData.map(info => <InfoCard key={info.id} info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;