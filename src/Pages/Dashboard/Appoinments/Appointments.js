import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState();
    useEffect(_ => {
        fetch(`https://thawing-stream-21692.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(result => {
                setAppointments(result)
            })
    }, [date, token, user.email])
    return (
        <div>
            <h2>Appointments: {appointments?.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.patientName}
                                </TableCell>
                                <TableCell align="right">{row?.time}</TableCell>
                                <TableCell align="right">{row?.serviceName}</TableCell>
                                <TableCell align="right">{row.payment ?
                                    "Paid" :
                                    <Link style={{ textDecoration: "none" }}
                                        to={`dashboard/payment/${row._id}`}><Button variant="contained">Pay</Button></Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;