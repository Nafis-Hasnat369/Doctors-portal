import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    { id: 1, price: 10, name: "Teeth Orthodontics", time: "08.00 AM - 09.00 AM", space: 10 },
    { id: 2, price: 20, name: "Cosmetic Dentistry", time: "10.05 AM - 11.30 AM", space: 8 },
    { id: 3, price: 25, name: "Teeth Cleaning", time: "05.00 PM - 06.30 PM", space: 8 },
    { id: 4, price: 35, name: "Cavity Protection", time: "07.00 AM - 08.30 AM", space: 9 },
    { id: 5, price: 15, name: "Cavity Protection", time: "07.00 AM - 08.30 AM", space: 12 },
    { id: 6, price: 12, name: "Cavity Protection", time: "07.00 AM - 08.30 AM", space: 6 }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: "info.main", mb: 3 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert security="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;