import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51JvlyBLzhu1z75VtPKRE6Svadt2qgeisW9vo4GFZpNTJXB1C2x0Lu7QpJIYA2sGxaRc0mbATBxYIL2R1EVmSbTcZ00iwnYgZZG');


const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointments] = useState({});
    useEffect(_ => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(result => {
                setAppointments(result)
                console.log(result);
            })
    }, [appointmentId]);
    return (
        <div>
            <h2>Please pay {appointment.patientName} for {appointment.serviceName} </h2>
            <h4>Pay: ${appointment.price}</h4>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>
        </div>
    );
};

export default Payment;