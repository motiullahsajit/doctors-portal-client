import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(`Id: ${paymentMethod.id}, Your Payment Was Successful`);
            setPaymentError(null)
            handlePaymentSuccess(paymentMethod.id);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {/* {
                paymentError && <p className='text-danger'>{paymentError}</p>
            }
            {
                paymentSuccess && <p className='text-success'>{paymentSuccess}</p>
            } */}

            <p className='text-danger'>{paymentError}</p>
            <p className='text-success'>{paymentSuccess}</p>
        </>
    );
};

export default SimpleCardForm;