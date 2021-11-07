import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, .8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (

        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -100 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "left" }} >
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: "#5CE7ED" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 4 }} style={{ color: "white", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga error earum velit animi recusandae necessitatibus non voluptas laboriosam, commodi nesciunt libero odit excepturi unde corrupti officiis alias fugiat numquam ullam.
                        </Typography>
                        <Button style={{ backgroundColor: "#5CE7ED" }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >

    );
};

export default AppointmentBanner;