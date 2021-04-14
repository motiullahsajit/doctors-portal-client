import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'

const InfoCard = ({ info }) => {
    const { tittle, description, icon, background } = info;
    return (
        <div className='col-md-4 text-white my-2'>
            <div className={`d-flex justify-content-between align-items-center info-container p-3 info-${background}`}>
                <div className='col-md-2'>
                    <FontAwesomeIcon className='info-icon' icon={icon} />
                </div>
                <div className='col-md-9'>
                    <h6>{tittle}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;