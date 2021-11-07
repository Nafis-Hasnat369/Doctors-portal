import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: "flex",
    height: 450,
    alignItems: "center"

}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray" }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, dicta voluptates! Reiciendis tenetur consectetur molestias, vel earum dolore quo quam?
                        </Typography>
                        <Button style={{ backgroundColor: "#5CE7ED" }} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;