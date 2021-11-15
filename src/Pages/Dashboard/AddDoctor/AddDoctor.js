import { Button, Input, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch(`https://thawing-stream-21692.herokuapp.com/doctors`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess("Doctor added successfully");
                }
            })
            .catch(error => {
                console.log("Error:", error);
            })
    }

    return (
        <div>
            <h2>Add a doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "75%" }}
                    required
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    variant="standard" /> <br />
                <TextField
                    sx={{ width: "50%" }}
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    variant="standard" /> <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
    );
};

export default AddDoctor;