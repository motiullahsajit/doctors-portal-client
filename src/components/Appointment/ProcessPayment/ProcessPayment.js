import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm'
const stripePromise = loadStripe('pk_test_51Ie1sPLxKgryMUPEOaDaDNP1fqAt1AjBQDcrN5lwLHTNN168297uMJ9EJZCvwYRfKMh5kfxty2ou4irYHgdiZd5S00B3cQMTKv');

const ProcessPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}/>
           {/* <SplitCardForm/> */}
        </Elements>

    );
};

export default ProcessPayment;