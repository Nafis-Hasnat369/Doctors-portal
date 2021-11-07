import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: 'Fluoride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat ea! Mollitia eaque sapiente atque provident voluptatum! Id, molestiae natus?",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat ea! Mollitia eaque sapiente atque provident voluptatum! Id, molestiae natus?",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat ea! Mollitia eaque sapiente atque provident voluptatum! Id, molestiae natus?",
        img: whitening
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 500, color: "success.main", m: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Service
                                    key={index}
                                    service={service}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;