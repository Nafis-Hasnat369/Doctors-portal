import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(_ => {
        fetch(`https://thawing-stream-21692.herokuapp.com/doctors`)
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
            })
    }, []);
    return (
        <div>
            <h2>Our doctors {doctors?.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors?.map(doc => <Grid key={doc._id} item xs={12} sm={12} md={6} lg={4}>
                            <img width="100%" src={`data:image/png;base64,${doc?.image}`} alt="" />
                            <h3>{doc.name}</h3>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;